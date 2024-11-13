import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaCheck, FaUndoAlt, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import "./Table.css";

export const TableRow = ({ word, index, editingIndex, onEditClick, onSaveClick, onCancelClick, matches }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            english: word.english,
            transcription: word.transcription,
            russian: word.russian,
        }
    });

    const isEditing = editingIndex === index;

    const onValid = (data) => {
        try {
            onSaveClick(data, index);
            toast.success('Изменения сохранены');
        } catch (error) {
            toast.error('Ошибка при сохранении. Попробуйте еще раз');
            console.error(error);
        }
    };

    const onInvalid = () => {
        toast.error('Изменения не сохранены. Заполните все поля');
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
                                    rules={{ required: true }}
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
                                    rules={{ required: true }}
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
                                    rules={{ required: true }}
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
                                        rules={{ required: true }}
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
                                        rules={{ required: true }}
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
                                    rules={{ required: true }}
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
                        <button className="button" type="button" onClick={handleSubmit(onValid, onInvalid)}>
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