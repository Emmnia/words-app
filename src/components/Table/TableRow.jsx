import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaCheck, FaUndoAlt, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { TableInputField } from './TableInputField';
import { StyledTableRow, TableData, TableTextArea, TableError, TableDataWrapper, TableControlsButton } from './Table.styled'

export const TableRow = ({ word, index, editingIndex, onEditClick, onSaveClick, onCancelClick, onDeleteClick, matches }) => {
    const { control, trigger, handleSubmit } = useForm({
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
                                    value={word.english}
                                />
                            </TableData>
                            <TableData>
                                <TableInputField
                                    control={control}
                                    name="transcription"
                                    rules={{ required: "Заполните это поле" }}
                                    trigger={trigger}
                                    value={word.transcription}
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
                                    value={word.russian}
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
                                        value={word.english}
                                    />
                                </TableDataWrapper>
                                <TableDataWrapper>
                                    <TableInputField
                                        control={control}
                                        name="transcription"
                                        rules={{ required: "Заполните это поле" }}
                                        trigger={trigger}
                                        value={word.transcription}
                                    />
                                </TableDataWrapper>
                            </TableData>
                            <TableData>
                                <Controller
                                    name="russian"
                                    control={control}
                                    rules={{
                                        required: "Заполните это поле",
                                        pattern: {
                                            value: /^[А-Яа-яЁё -]+$/,
                                            message: "Введите только кириллицу"
                                        },
                                    }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <TableTextArea
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    trigger("russian");
                                                }}
                                                value={word.russian}
                                            />
                                            {fieldState.error && <TableError>{fieldState.error.message}</TableError>}
                                        </>
                                    )}
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