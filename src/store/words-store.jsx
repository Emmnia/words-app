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
        this.initializeLastShownDate();
        this.fetchWords();
    }

    initializeLastShownDate() {
        const storedDate = localStorage.getItem('lastShownDate');
        if (storedDate) {
            this.lastShownDate = new Date(storedDate).toISOString().split('T')[0];
        } else {
            this.lastShownDate = null;
        }
    }

    getWords() {
        return this.words;
    }

    fetchWords = async () => {
        if (this.words.length > 0) return;
        this.loading = true;
        try {
            const response = await fetch('${import.meta.env.VITE_API_URL}/api/words');
            if (!response.ok) {
                throw new Error(`Couldn't load words from server`);
            }
            const data = await response.json();
            console.log("Загруженные слова:", data);

            const now = new Date();
            const currentDate = now.toISOString().split('T')[0];

            runInAction(() => {
                this.words = data;
                const isDifferentDay = !this.lastShownDate || this.lastShownDate !== currentDate;
                const storedWordId = localStorage.getItem('lastWordId');
                this.wordId = storedWordId ? storedWordId : null;
                const currentWord = this.words.find(word => word.id === this.wordId);
                this.word = currentWord || null;

                if (isDifferentDay) {
                    const newWord = data[Math.floor(Math.random() * data.length)];
                    if (newWord) {
                        this.word = newWord;
                        this.wordId = newWord.id;
                        this.lastShownDate = currentDate;
                        localStorage.setItem('lastShownDate', currentDate);
                        localStorage.setItem('lastWordId', this.wordId);
                        this.wordUpdated = true;
                    }
                } else if (!this.wordId) {
                    const newWord = data[Math.floor(Math.random() * data.length)];
                    this.word = newWord;
                    this.wordId = newWord.id;
                    localStorage.setItem('lastWordId', this.wordId);
                }
            });
        } catch (error) {
            console.error(error);
            runInAction(() => {
                this.error = error;
                toast.info('Error fetching words, backup file loading', { toastId: 'backup-toast' });
                this.words = wordsJSON;
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    sendWordToServer = async (word) => {
        try {
            const response = await fetch('${import.meta.env.VITE_API_URL}/api/words/add', {
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

    editWordOnServer = async (wordToUpdate) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/words/${wordToUpdate.id}/update`, {
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
                toast.success('Changes saved');
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
            });
        }
    }

    deleteWordFromServer = async (wordToDelete) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/words/${wordToDelete.id}/delete`, {
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
                toast.success('Word deleted');
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
            });
        }
    }

    setNewWord = (newWordData) => {
        this.newWord = { ...newWordData };
    }

    setWordUpdated = (updated) => {
        this.wordUpdated = updated;
    }
}

export const wordsStore = new WordsStore();