import { createContext, useState, useEffect } from "react";
import wordsJSON from '../words.json';
import { toast } from "react-toastify";

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
        tags: "",
        tags_json: ""
    });

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
            } catch (error) {
                console.error(error);
                setError(error);
                toast.info('Ошибка при получении слов с сервера, загружается локальный файл', { toastId: 'backup-toast' });
                setWords(wordsJSON)
            } finally {
                setLoading(false);
            }
        };

        fetchWords();
    }, []);

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
            setWords((prevWords) => [...prevWords, result]);
        } catch (error) {
            setError(error);
        }
    };

    const editWordOnServer = async (word) => {
        try {
            const response = await fetch(`/api/words/${word.id}/update`, {
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

            setWords(prevWords => {
                const index = prevWords.findIndex(w => w.id === result.id);
                if (index > -1) {
                    const newWords = [...prevWords];
                    newWords[index] = result;
                    return newWords;
                }
                return [...prevWords, result];
            });
        } catch (error) {
            setError(error);
        }
    };

    return (
        <WordsContext.Provider value={{ words, loading, error, sendWordToServer, newWord, setNewWord, editWordOnServer }}>
            {children}
        </WordsContext.Provider>
    );
};


