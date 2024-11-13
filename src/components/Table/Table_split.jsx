// Table: основной компонент, который будет собирать все остальные компоненты.
//     TableHeader: компонент для заголовка таблицы.
//         TableBody: компонент для тела таблицы, который будет рендерить строки.
//             TableRow: компонент для каждой строки таблицы.
//                 TableCell: компонент для ячейки таблицы.
//                     EditForm: компонент для редактирования слов.
//                         LoadMoreButton: компонент для кнопки загрузки дополнительных слов.
//                             AddWordForm: компонент для формы добавления слова.



// Table.jsx

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocalStorage } from './hooks/useLocalStorage';
import AddWordForm from './AddWordForm';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { LoadMoreButton } from './LoadMoreButton';
import words from './data/words'; // предполагаем, что вы импортируете список слов

export const Table = () => {
    const [visibleCount, setVisibleCount] = useState(10);
    const [editingIndex, setEditingIndex] = useState(null);
    const [data, setData] = useLocalStorage('words', words);
    const matches = useMediaQuery('(min-width:900px)');

    const handleEditClick = (index) => setEditingIndex(index);
    const handleSaveClick = (updatedWord, index) => {
        const updatedData = [...data];
        updatedData[index] = updatedWord;
        setData(updatedData);
        setEditingIndex(null);
    };
    const handleCancelClick = () => setEditingIndex(null);
    const loadMore = () => setVisibleCount(prevCount => prevCount + 10);

    return (
        <>
            <AddWordForm />
            <h1>Список слов</h1>
            <table className="table">
                <TableHeader matches={matches} />
                <TableBody
                    data={data}
                    visibleCount={visibleCount}
                    editingIndex={editingIndex}
                    onEditClick={handleEditClick}
                    onSaveClick={handleSaveClick}
                    onCancelClick={handleCancelClick}
                    matches={matches}
                />
            </table>
            <LoadMoreButton visibleCount={visibleCount} dataLength={data.length} onLoadMore={loadMore} />
        </>
    );
};

// TableHeader.jsx

export const TableHeader = ({ matches }) => (
    <thead>
        <tr className="table__header">
            <th className="word-number"></th>
            <th className="table__content">English</th>
            {matches && <th className="table__content">Transcription</th>}
            <th className="table__content">Russian</th>
            <th className="actions"></th>
        </tr>
    </thead>
);


// TableBody.jsx


import { TableRow } from './TableRow';

export const TableBody = ({
    data,
    visibleCount,
    editingIndex,
    onEditClick,
    onSaveClick,
    onCancelClick,
    matches
}) => (
    <tbody>
        {data.slice(0, visibleCount).map((word, index) => (
            <TableRow
                key={word.id}
                word={word}
                index={index}
                editingIndex={editingIndex}
                onEditClick={onEditClick}
                onSaveClick={onSaveClick}
                onCancelClick={onCancelClick}
                matches={matches}
            />
        ))}
    </tbody>
);

// TableRow.jsx

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaCheck, FaUndoAlt, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

export const TableRow = ({
    word,
    index,
    editingIndex,
    onEditClick,
    onSaveClick,
    onCancelClick,
    matches
}) => {
    const { control, handleSubmit, setError } = useForm({
        defaultValues: {
            english: word.english,
            transcription: word.transcription,
            russian: word.russian,
        },
    });

    const isEditing = editingIndex === index;

    const onSubmit = (data) => {
        const hasEmptyFields = Object.values(data).some(value => value.trim() === '');

        if (hasEmptyFields) {
            // Устанавливаем ошибки для пустых полей
            Object.keys(data).forEach(key => {
                if (!data[key].trim()) {
                    setError(key, { type: 'manual', message: 'Это поле нужно заполнить!' });
                }
            });
            toast.error('Изменения не сохранены. Заполните все поля');
            return;
        }

        try {
            onSaveClick(data, index); // Отправляем данные и индекс обратно в родительский компонент
            toast.success('Изменения сохранены');
        } catch (error) {
            toast.error('Ошибка при сохранении. Попробуйте еще раз');
            console.error(error);
        }
    };

    return (
        <tr className="table__row">
            <td>{index + 1}</td>
            {isEditing ? (
                <>
                    {matches ? (
                        <>
                            <td>
                                <Controller
                                    name="english"
                                    control={control}
                                    rules={{ required: true }} // Добавляем валидацию на обязательность
                                    render={({ field, fieldState }) => (
                                        <>
                                            <input
                                                className={`table__input ${fieldState.invalid ? 'input-error' : ''}`}
                                                type="text"
                                                {...field}
                                            />
                                            {fieldState.error && <span className="error-message">{fieldState.error.message}</span>}
                                        </>
                                    )}
                                />
                            </td>
                            <td>
                                <Controller
                                    name="transcription"
                                    control={control}
                                    rules={{ required: true }} // Добавляем валидацию на обязательность
                                    render={({ field, fieldState }) => (
                                        <>
                                            <input
                                                className={`table__input ${fieldState.invalid ? 'input-error' : ''}`}
                                                type="text"
                                                {...field}
                                            />
                                            {fieldState.error && <span className="error-message">{fieldState.error.message}</span>}
                                        </>
                                    )}
                                />
                            </td>
                            <td>
                                <Controller
                                    name="russian"
                                    control={control}
                                    rules={{ required: true }} // Добавляем валидацию на обязательность
                                    render={({ field, fieldState }) => (
                                        <>
                                            <input
                                                className={`table__input ${fieldState.invalid ? 'input-error' : ''}`}
                                                type="text"
                                                {...field}
                                            />
                                            {fieldState.error && <span className="error-message">{fieldState.error.message}</span>}
                                        </>
                                    )}
                                />
                            </td>
                        </>
                    ) : (
                        <>
                            <td>
                                <p>
                                    <Controller
                                        name="english"
                                        control={control}
                                        rules={{ required: true }} // Добавляем валидацию на обязательность
                                        render={({ field, fieldState }) => (
                                            <>
                                                <input
                                                    className={`table__input ${fieldState.invalid ? 'input-error' : ''}`}
                                                    type="text"
                                                    {...field}
                                                />
                                                {fieldState.error && <span className="error-message">{fieldState.error.message}</span>}
                                            </>
                                        )}
                                    />
                                </p>
                                <p>
                                    <Controller
                                        name="transcription"
                                        control={control}
                                        rules={{ required: true }} // Добавляем валидацию на обязательность
                                        render={({ field, fieldState }) => (
                                            <>
                                                <input
                                                    className={`table__input ${fieldState.invalid ? 'input-error' : ''}`}
                                                    type="text"
                                                    {...field}
                                                />
                                                {fieldState.error && <span className="error-message">{fieldState.error.message}</span>}
                                            </>
                                        )}
                                    />
                                </p>
                            </td>
                            <td>
                                <Controller
                                    name="russian"
                                    control={control}
                                    rules={{ required: true }} // Добавляем валидацию на обязательность
                                    render={({ field, fieldState }) => (
                                        <>
                                            <textarea
                                                className={`table__input ${fieldState.invalid ? 'input-error' : ''}`}
                                                {...field}
                                            />
                                            {fieldState.error && <span className="error-message">{fieldState.error.message}</span>}
                                        </>
                                    )}
                                />
                            </td>
                        </>
                    )}
                    <td>
                        <button className="button" type="button" onClick={handleSubmit(onSubmit)}>
                            <FaCheck />
                        </button>
                        <button className="button" type="button" onClick={onCancelClick}>
                            <FaUndoAlt />
                        </button>
                    </td>
                </>
            ) : (
                <>
                    {matches ? (
                        <>
                            <td>{word.english}</td>
                            <td>{word.transcription}</td>
                        </>
                    ) : (
                        <>
                            <td>
                                <p>{word.english}</p>
                                <p>{word.transcription}</p>
                            </td>
                        </>
                    )}
                    <td>{word.russian}</td>
                    <td>
                        <button className="button" type="button" onClick={() => onEditClick(index)}>
                            <FaPencilAlt />
                        </button>
                        <button className="button" type="button">
                            <FaTrashAlt />
                        </button>
                    </td>
                </>
            )}
        </tr>
    );
};

// LoadMoreButton.jsx

export const LoadMoreButton = ({ visibleCount, dataLength, onLoadMore }) => {
    if (visibleCount >= dataLength) return null;
    return (
        <button className="load-more-button" type="button" onClick={onLoadMore}>
            Загрузить еще
        </button>
    );
};