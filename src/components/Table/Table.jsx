import "./Table.css";
import { TableWrapper } from "./Table.styled";
import words from '/src/words.json'
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocalStorage } from "@uidotdev/usehooks";

export const Table = () => {

    const [editing, setEditing] = useState(null);
    const [data, setData] = useLocalStorage('words', words);

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
        for (let input of inputs) {
            if (input.value === '') {
                input.style.borderColor = '#E55D87'
            }
        }
        if (inputs[0].value === '' || inputs[1].value === '' || inputs[2].value === '') {
            toast.error('Изменения не сохранены. Заполните все поля')
        } else {
            wordsCopy[editing] = updatedWord;
            setEditing(null);
            setData(wordsCopy);
            toast.success('Изменения сохранены')
        }
    };

    const handleCancelClick = () => {
        setEditing(null);
    };

    const matches = useMediaQuery('(min-width:900px)')

    return (
        <>
            <h1>Список слов</h1>
            <TableWrapper>
                <table className="table">
                    <thead>
                        <tr className="table__header">
                            <th className="word-number"></th>
                            {matches ? (
                                <>
                                    <th className="table__content">English</th>
                                    <th className="table__content">Transcription</th>
                                    <th className="table__content">Russian</th>
                                </>
                            ) : (
                                <>
                                    <th className="table__content">English</th>
                                    <th className="table__content">Russian</th>
                                </>
                            )}
                            <th className="actions"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((word, index) => (
                            <tr className="table__row" key={word.id} style={{ '--idx': index + 1 }}>
                                <td>{index + 1}</td>
                                {editing === index ? (
                                    <>
                                        {matches ? (
                                            <>
                                                <td><input className="table__input" type="text" defaultValue={word.english} /></td>
                                                <td><input className="table__input" type="text" defaultValue={word.transcription} /></td>
                                                <td><input className="table__input" type="text" defaultValue={word.russian} /></td>
                                            </>) : (
                                            <>
                                                <td><p><input className="table__input" type="text" defaultValue={word.english} /></p>
                                                    <p><input className="table__input" type="text" defaultValue={word.transcription} /></p></td>
                                                <td><textarea className="table__input" defaultValue={word.russian} /></td>
                                            </>)}
                                        <td>
                                            <button className="button" type="button" onClick={() => handleSaveClick()}><FaCheck /></button>
                                            <button className="button" type="button" onClick={() => handleCancelClick(index)}><FaUndoAlt /></button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        {matches ? (
                                            <>
                                                <td>{word.english}</td>
                                                <td>{word.transcription}</td>
                                            </>) : (<>
                                                <td><p>{word.english}</p>
                                                    <p>{word.transcription}</p></td>
                                            </>)}
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
            </TableWrapper>
        </>
    );
};