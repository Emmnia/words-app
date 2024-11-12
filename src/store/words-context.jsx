import { createContext, useState, useEffect } from "react";

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
            try {
                const response = await fetch('/api/words');
                if (!response.ok) {
                    throw new Error('Something went wrong ...');
                }
                const data = await response.json();
                setWords(data);
            } catch (error) {
                setError(error);
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

    return (
        <WordsContext.Provider value={{ words, loading, error, sendWordToServer, newWord, setNewWord }}>
            {children}
        </WordsContext.Provider>
    );
};


