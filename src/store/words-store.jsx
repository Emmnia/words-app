import { action, makeAutoObservable } from 'mobx';
import wordsJSON from '../words.json';

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
    wordId = localStorage.getItem('lastWordId') || null;
    lastShownDate = localStorage.getItem('lastShownDate') || null;
    wordUpdated = false;
    notify = null; // Функция для уведомлений

    constructor(notify) {
        makeAutoObservable(this);
        this.notify = notify; // Сохраняем функцию уведомления
    }

    @action
    setWords(words) {
        this.words = words;
    }

    @action
    setLoading(loading) {
        this.loading = loading;
    }

    @action
    setError(error) {
        this.error = error;
    }

    @action
    setNewWord(newWord) {
        this.newWord = newWord;
    }

    @action
    setWord(word) {
        this.word = word;
    }

    @action
    setWordId(wordId) {
        this.wordId = wordId;
        localStorage.setItem('lastWordId', wordId);
    }

    @action
    setLastShownDate(date) {
        this.lastShownDate = date;
        localStorage.setItem('lastShownDate', date);
    }

    @action
    async fetchWords() {
        this.setLoading(true);
        try {
            const response = await fetch('/api/words');
            if (!response.ok) {
                throw new Error('Не удалось загрузить слова с сервера');
            }
            const data = await response.json();
            this.setWords(data);

            const now = new Date();
            const currentDate = now.toISOString().split('T')[0];

            if (!this.lastShownDate || this.lastShownDate !== currentDate) {
                const newWord = data[Math.floor(Math.random() * data.length)];
                this.setWord(newWord);
                this.setWordId(newWord ? newWord.id : null);
                this.setLastShownDate(currentDate);
                this.wordUpdated = true;
            } else if (this.wordId) {
                const previousWord = data.find(word => word.id === this.wordId);
                this.setWord(previousWord);
            }
        } catch (error) {
            console.error(error);
            this.setError(error);
            if (this.notify) {
                this.notify.info('Ошибка при получении слов с сервера, загружается резервный файл', {
                    toastId: 'backup-toast',
                });
            }
            this.setWords(wordsJSON);
        } finally {
            this.setLoading(false);
        }
    }
}

export const createWordsStore = (notify) => new WordsStore(notify);