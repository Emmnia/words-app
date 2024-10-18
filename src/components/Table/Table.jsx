import "./Table.css";
import words from '/src/words.json'
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const Table = () => {

    const [editing, setEditing] = useState(null);
    const [data, setData] = useState(words);

    useEffect(() => {
        const storedWords = localStorage.getItem('words');
        if (storedWords) {
            setData(JSON.parse(storedWords));
        }
    }, []);

    const clone = (data) => {
        return JSON.parse(JSON.stringify(data));
    }

    const handleEditClick = (index) => {
        setEditing(index);
    };

    const handleSaveClick = () => {
        const inputs = document.querySelectorAll('.table__input');
        const wordsCopy = clone(data);
        const updatedWord = {
            english: inputs[0].value,
            transcription: inputs[1].value,
            russian: inputs[2].value,
        };
        wordsCopy[editing] = updatedWord;
        setEditing(null);
        setData(wordsCopy);
        localStorage.setItem('words', JSON.stringify(wordsCopy));
        toast.success('Изменения сохранены')
    };

    const handleCancelClick = () => {
        setEditing(null);
    };

    return (
        <table className="table">
            <thead>
                <tr className="table__header">
                    <th className="word-number"></th>
                    <th className="table__content">English</th>
                    <th className="table__content">Transcription</th>
                    <th className="table__content">Russian</th>
                    <th className="actions"></th>
                </tr>
            </thead>
            <tbody>
                {data.map((word, index) => (
                    <tr className="table__row" key={word.id}>
                        {editing === index ? (
                            <>
                                <td>{index + 1}</td>
                                <td><input className="table__input" type="text" defaultValue={word.english} /></td>
                                <td><input className="table__input" type="text" defaultValue={word.transcription} /></td>
                                <td><input className="table__input" type="text" defaultValue={word.russian} /></td>
                                <td>
                                    <button className="button" type="button" onClick={() => handleSaveClick()}><FaCheck /></button>
                                    <button className="button" type="button" onClick={() => handleCancelClick(index)}><FaUndoAlt /></button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td>{index + 1}</td>
                                <td>{word.english}</td>
                                <td>{word.transcription}</td>
                                <td>{word.russian}</td>
                                <td>
                                    <button className="button" type="button" onClick={() => handleEditClick(index)}>
                                        <FaPencilAlt />
                                    </button>
                                    <button className="button" type="button">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};