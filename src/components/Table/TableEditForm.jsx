import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { WordsContext } from '../../store/words-context'
import { toast } from 'react-toastify';
import { FaCheck, FaUndoAlt } from 'react-icons/fa';
import { TableData, TableForm, TableInput, TableInputWrapper, TableError, TableControlsButton } from './Table.styled'

export const TableEditForm = ({ word, matches, onCancelClick, onSaveClick }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        trigger,
    } = useForm({
        defaultValues: {
            id: word.id,
            english: word.english,
            transcription: word.transcription,
            russian: word.russian,
        }
    });

    const { editWordOnServer } = useContext(WordsContext);

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setValue(name, value);
        await trigger(name);
    };

    const onValid = async (data) => {
        try {
            const wordToUpdate = {
                id: word.id,
                english: data.english,
                transcription: data.transcription,
                russian: data.russian,
                tags: word.tags,
            };

            await editWordOnServer(wordToUpdate);

        } catch (error) {
            toast.error('Ошибка при сохранении. Попробуйте еще раз');
            console.error(error);
        }
    };

    const onInvalid = () => {
        toast.error('Изменения не сохранены. Корректно заполните все поля');
    };

    return (
        <>
            <TableData colSpan={matches ? 3 : 2}>
                <TableForm>
                    <TableInputWrapper>
                        <TableInput
                            {...register("english", {
                                required: "Заполните это поле",
                                pattern: {
                                    value: /^[A-Za-z -]+$/,
                                    message: "Введите только латиницу"
                                },
                                onBlur: () => trigger("english"),
                            })}
                            onChange={handleChange}
                        />
                        {errors.english && <TableError>{errors.english.message}</TableError>}
                    </TableInputWrapper>
                    <TableInputWrapper>
                        <TableInput
                            {...register("transcription", {
                                required: "Заполните это поле",
                                onBlur: () => trigger("english"),
                            })}
                            onChange={handleChange}
                        />
                        {errors.transcription && <TableError>{errors.transcription.message}</TableError>}
                    </TableInputWrapper>
                    <TableInputWrapper>
                        <TableInput
                            {...register("russian", {
                                required: "Заполните это поле",
                                pattern: {
                                    value: /^[А-Яа-яЁё -]+$/,
                                    message: "Введите только кириллицу"
                                },
                                onBlur: () => trigger("russian"),
                            })}
                            onChange={handleChange}
                        />
                        {errors.russian && <TableError>{errors.russian.message}</TableError>}
                    </TableInputWrapper>
                </TableForm>
            </TableData>
            <TableData>
                <TableControlsButton type="button" onClick={handleSubmit((data) => {
                    onValid(data);
                    onSaveClick();
                }, onInvalid)}>
                    <FaCheck />
                </TableControlsButton>
                <TableControlsButton type="button" onClick={onCancelClick}>
                    <FaUndoAlt />
                </TableControlsButton>
            </TableData>
        </>
    )
}
