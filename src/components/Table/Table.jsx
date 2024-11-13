import "./Table.css";
import { TableWrapper } from "./Table.styled";
import words from '/src/words.json'
import { FaPencilAlt, FaTrashAlt, FaCheck, FaUndoAlt } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocalStorage } from "@uidotdev/usehooks";
import { AddWordForm } from "../AddWordForm/AddWordForm";

export const Table = () => {

    const [visibleCount, setVisibleCount] = useState(10);
    const [editing, setEditing] = useState(null);
    const [data, setData] = useLocalStorage('words', words);

    const matches = useMediaQuery('(min-width:900px)');

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

        inputs.forEach(input => input.style.borderColor = '');

        const hasEmptyFields = Array.from(inputs).some(input => {
            if (input.value.trim() === '') {
                input.style.borderColor = '#E55D87';
                input.title = 'Это поле нужно заполнить!';
                return true;
            }
            return false;
        });

        if (hasEmptyFields) {
            toast.error('Изменения не сохранены. Заполните все поля', { toastId: 'mistakes-toast' });
        } else {
            try {
                wordsCopy[editing] = updatedWord;
                setEditing(null);
                setData(wordsCopy);
                toast.success('Изменения сохранены', { toastId: 'saved-toast' });
                console.log(updatedWord);
            } catch (error) {
                toast.error('Ошибка при сохранении. Попробуйте еще раз', { toastId: 'tryagain-toast' });
                console.error(error);
            }
        }
    };

    const handleCancelClick = () => {
        setEditing(null);
    };

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 10);
    };

    return (
        <>
            <AddWordForm />
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
                        {data.slice(0, visibleCount).map((word, index) => (
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
                {visibleCount < data.length && (
                    <button className="load-more-button" type="button" onClick={loadMore}>
                        Загрузить еще
                    </button>
                )}
            </TableWrapper>
        </>
    );
};