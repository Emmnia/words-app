import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { WordsContext } from '../../store/words-context'
import { toast } from 'react-toastify';
import { FaCheck, FaUndoAlt, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { TableInputField } from './TableInputField';
import { StyledTableRow, TableData, TableDataWrapper, TableControlsButton } from './Table.styled'

export const TableRow = ({ word, index, editingIndex, onEditClick, onSaveClick, onCancelClick, onDeleteClick, onChange, matches }) => {
    const { control, trigger, handleSubmit } = useForm({
        defaultValues: {
            id: word.id,
            english: word.english,
            transcription: word.transcription,
            russian: word.russian,
        }
    });

    const isEditing = editingIndex === index;

    const { words, editedWord, setEditedWord } = useContext(WordsContext);

    const onValid = (data) => {
        try {
            const wordToUpdate = words.find(word => word.id === data.id);
            console.log(wordToUpdate);
            setEditedWord({
                id: wordToUpdate.id,
                english: data.english,
                transcription: data.transcription,
                russian: data.russian,
                tags: wordToUpdate.tags,
            });
            console.log(editedWord);
            onSaveClick();
            toast.success('Изменения сохранены');
        } catch (error) {
            toast.error('Ошибка при сохранении. Попробуйте еще раз');
            console.error(error);
        }
    };

    const onInvalid = () => {
        toast.error('Изменения не сохранены. Корректно заполните все поля');
    };

    return (
        <StyledTableRow>
            <TableData>{index + 1}</TableData>
            {isEditing ? (
                <>
                    {matches ? (
                        <>
                            <TableData>
                                <TableInputField
                                    control={control}
                                    name="english"
                                    rules={{
                                        required: "Заполните это поле",
                                        pattern: {
                                            value: /^[A-Za-z -]+$/,
                                            message: "Введите только латиницу"
                                        },
                                    }}
                                    trigger={trigger}
                                    onChange={onChange}
                                />
                            </TableData>
                            <TableData>
                                <TableInputField
                                    control={control}
                                    name="transcription"
                                    rules={{ required: "Заполните это поле" }}
                                    trigger={trigger}
                                    onChange={onChange}
                                />
                            </TableData>
                            <TableData>
                                <TableInputField
                                    control={control}
                                    name="russian"
                                    rules={{
                                        required: "Заполните это поле",
                                        pattern: {
                                            value: /^[А-Яа-яЁё -]+$/,
                                            message: "Введите только кириллицу"
                                        },
                                    }}
                                    trigger={trigger}
                                    onChange={onChange}
                                />
                            </TableData>
                        </>
                    ) : (
                        <>
                            <TableData>
                                <TableDataWrapper>
                                    <TableInputField
                                        control={control}
                                        name="english"
                                        rules={{
                                            required: "Заполните это поле",
                                            pattern: {
                                                value: /^[A-Za-z -]+$/,
                                                message: "Введите только латиницу"
                                            },
                                        }}
                                        trigger={trigger}
                                        onChange={onChange}
                                    />
                                </TableDataWrapper>
                                <TableDataWrapper>
                                    <TableInputField
                                        control={control}
                                        name="transcription"
                                        rules={{ required: "Заполните это поле" }}
                                        trigger={trigger}
                                        onChange={onChange}
                                    />
                                </TableDataWrapper>
                            </TableData>
                            <TableData>
                                <TableInputField
                                    control={control}
                                    name="russian"
                                    rules={{
                                        required: "Заполните это поле",
                                        pattern: {
                                            value: /^[А-Яа-яЁё -]+$/,
                                            message: "Введите только кириллицу"
                                        },
                                    }}
                                    trigger={trigger}
                                    onChange={onChange}
                                />
                            </TableData>
                        </>
                    )}
                    <TableData>
                        <TableControlsButton type="button" onClick={handleSubmit(onValid, onInvalid)}>
                            <FaCheck />
                        </TableControlsButton>
                        <TableControlsButton type="button" onClick={onCancelClick}>
                            <FaUndoAlt />
                        </TableControlsButton>
                    </TableData>
                </>
            ) : (
                <>
                    {matches ? (
                        <>
                            <TableData>{word.english}</TableData>
                            <TableData>{word.transcription}</TableData>
                        </>
                    ) : (
                        <>
                            <TableData>
                                <TableDataWrapper>{word.english}</TableDataWrapper>
                                <TableDataWrapper>{word.transcription}</TableDataWrapper>
                            </TableData>
                        </>
                    )}
                    <TableData>{word.russian}</TableData>
                    <TableData>
                        <TableControlsButton type="button" onClick={() => onEditClick(index)}>
                            <FaPencilAlt />
                        </TableControlsButton>
                        <TableControlsButton type="button" onClick={onDeleteClick}>
                            <FaTrashAlt />
                        </TableControlsButton>
                    </TableData>
                </>
            )}
        </StyledTableRow>
    );
};