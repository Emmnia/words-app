import { makeAutoObservable, runInAction } from 'mobx';
import wordsJSON from '../words.json';
import { toast } from "react-toastify";

class WordsStore {
    words = [];
    loading = true;
    error = null;
    newWord = {
        id: "",
        english: "",
        transcription: "",
        russian: "",
        tags: ""
    };
    word = null;
    wordId = null;
    lastShownDate = null;
    wordUpdated = false;

    constructor() {
        makeAutoObservable(this);
        this.fetchWords();
    }

    async fetchWords() {
        if (this.words.length > 0) return;
        this.loading = true;
        try {
            const response = await fetch('/api/words');
            if (!response.ok) {
                throw new Error('Не удалось загрузить слова с сервера');
            }
            const data = await response.json();
            console.log("Загруженные слова:", data);

            const now = new Date();
            const currentDate = now.toISOString().split('T')[0];

            runInAction(() => {
                this.words = data;

                if (!this.lastShownDate || this.lastShownDate !== currentDate) {
                    const newWord = data[Math.floor(Math.random() * data.length)];
                    this.word = newWord;
                    console.log('newWord: ', newWord);
                    this.wordId = newWord ? newWord.id : null;
                    this.lastShownDate = currentDate;
                    this.wordUpdated = true;
                } else if (this.wordId) {
                    const previousWord = data.find(word => word.id === this.wordId);
                    this.word = previousWord;
                    console.log('previousWord: ', previousWord);
                }
            });
        } catch (error) {
            console.error(error);
            runInAction(() => {
                this.error = error;
                toast.info('Ошибка при получении слов с сервера, загружается резервный файл', { toastId: 'backup-toast' });
                this.words = wordsJSON;
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    async sendWordToServer(word) {
        try {
            const response = await fetch('/api/words/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(word),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке данных');
            }

            const result = await response.json();
            console.log(result);
            runInAction(() => {
                this.words.push(result);
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
            });
        }
    }

    async editWordOnServer(wordToUpdate) {
        try {
            const response = await fetch(`/api/words/${wordToUpdate.id}/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wordToUpdate),
            });

            if (!response.ok) {
                throw new Error('Ошибка при редактировании слова: ' + response.statusText);
            }

            const responseData = await response.json();
            console.log("Ответ от сервера:", responseData);

            runInAction(() => {
                this.words = this.words.map(word =>
                    word.id === wordToUpdate.id ? { ...word, ...wordToUpdate } : word
                );
                toast.success('Изменения сохранены');
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
            });
        }
    }

    async deleteWordFromServer(wordToDelete) {
        try {
            const response = await fetch(`/api/words/${wordToDelete.id}/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wordToDelete),
            });

            if (!response.ok) {
                throw new Error('Ошибка при удалении слова: ' + response.statusText);
            }

            runInAction(() => {
                this.words = this.words.filter(word => word.id !== wordToDelete.id);
                toast.success('Слово удалено');
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
            });
        }
    }

    setNewWord(newWord) {
        this.newWord = newWord;
    }

    setWordUpdated(updated) {
        this.wordUpdated = updated;
    }
}

export const wordsStore = new WordsStore();