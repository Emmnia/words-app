import { createContext, useState, useEffect } from "react";
import wordsJSON from '../words.json';
import { toast } from "react-toastify";
import { useLocalStorage } from "@uidotdev/usehooks";

export const WordsContext = createContext({
    words: [],
    loading: true,
    error: null,
    newWord: {
        id: "",
        english: "",
        transcription: "",
        russian: "",
        tags: "",
        tags_json: ""
    }
});

export const WordsContextProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [newWord, setNewWord] = useState({
        id: "",
        english: "",
        transcription: "",
        russian: "",
        tags: ""
    });

    const [word, setWord] = useState(null);
    const [wordId, setWordId] = useLocalStorage('lastWordId', null);
    const [lastShownDate, setLastShownDate] = useLocalStorage('lastShownDate', null);
    const [wordUpdated, setWordUpdated] = useState(false);

    useEffect(() => {
        const fetchWords = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/words');
                if (!response.ok) {
                    throw new Error('Не удалось загрузить слова с сервера');
                }
                const data = await response.json();
                setWords(data);
                console.log("Загруженные слова:", data);

                const now = new Date();
                const currentDate = now.toISOString().split('T')[0];

                if (!lastShownDate || lastShownDate !== currentDate) {
                    const newWord = data[Math.floor(Math.random() * data.length)];
                    setWord(newWord);
                    console.log('newWord: ', newWord);
                    setWordId(newWord ? newWord.id : null);
                    setLastShownDate(currentDate);
                    setWordUpdated(true);
                } else if (wordId) {
                    const previousWord = data.find(word => word.id === wordId);
                    setWord(previousWord);
                    console.log('previousWord: ', previousWord);

                }
            } catch (error) {
                console.error(error);
                setError(error);
                toast.info('Ошибка при получении слов с сервера, загружается резервный файл', { toastId: 'backup-toast' });
                setWords(wordsJSON);
            } finally {
                setLoading(false);
            }
        };
        fetchWords();
    }, [lastShownDate, setLastShownDate, setWordId, wordId]);

    const sendWordToServer = async (word) => {
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
            setWords((prevWords) => [...prevWords, result]);
        } catch (error) {
            setError(error);
        }
    };

    const editWordOnServer = async (wordToUpdate) => {
        try {
            const response = await fetch(`/api/words/${wordToUpdate.id}/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wordToUpdate),
            });

            const responseData = await response.json();
            console.log("Ответ от сервера:", responseData);

            if (!response.ok) {
                throw new Error('Ошибка при редактировании слова: ' + response.statusText);
            }

            setWords(prevWords => {
                return prevWords.map(word =>
                    word.id === wordToUpdate.id ? { ...word, ...wordToUpdate } : word
                );
            });
            toast.success('Изменения сохранены');

        } catch (error) {
            setError(error);
        }
    };

    const deleteWordFromServer = async (wordToDelete) => {
        try {
            const response = await fetch(`/api/words/${wordToDelete.id}/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wordToDelete),
            });

            const responseData = await response.json();
            console.log("Ответ от сервера:", responseData);

            if (!response.ok) {
                throw new Error('Ошибка при удалении слова: ' + response.statusText);
            }

            console.log("Состояние до удаления:", words);
            setWords(prevWords => {
                const updatedWords = prevWords.filter(word => word.id !== wordToDelete.id);
                console.log("Состояние после удаления:", updatedWords);
                return updatedWords;
            })
            toast.success('Слово удалено');

        } catch (error) {
            setError(error);
        }
    };

    return (
        <WordsContext.Provider value={{ words, word, loading, error, wordUpdated, setWordUpdated, sendWordToServer, newWord, setNewWord, editWordOnServer, deleteWordFromServer }}>
            {children}
        </WordsContext.Provider>
    );
};