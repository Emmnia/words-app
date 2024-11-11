import { createContext, useState, useEffect } from "react";

export const WordsContext = createContext({
    words: [],
    loading: true,
    error: null,
});

export const WordsContextProvider = (props) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
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

    return (
        <WordsContext.Provider value={{ words, loading, error }}>
            {props.children}
        </WordsContext.Provider>
    );
};