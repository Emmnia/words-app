import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../store/words-store';
import { toast } from 'react-toastify';
import { FaCheck, FaUndoAlt } from 'react-icons/fa';
import { TableData, TableForm, TableInput, TableInputWrapper, TableError, TableControlsButton } from './Table.styled'

export const TableEditForm = observer(({ word, matches, onCancelClick, onSaveClick }) => {

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

    const { editWordOnServer } = wordsStore;

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
            toast.error('Error saving changes. Please try again');
            console.error(error);
        }
    };

    const onInvalid = () => {
        toast.error('Changes not saved. Fill out all the fields correctly');
    };

    return (
        <>
            <TableData colSpan={matches ? 3 : 2}>
                <TableForm>
                    <TableInputWrapper>
                        <TableInput
                            {...register('english', {
                                required: 'Required field',
                                pattern: {
                                    value: /^[A-Za-z -]+$/,
                                    message: 'Latin characters only'
                                },
                                onBlur: () => trigger('english'),
                            })}
                            onChange={handleChange}
                        />
                        {errors.english && <TableError>{errors.english.message}</TableError>}
                    </TableInputWrapper>
                    <TableInputWrapper>
                        <TableInput
                            {...register('transcription', {
                                required: 'Required field',
                                onBlur: () => trigger('english'),
                            })}
                            onChange={handleChange}
                        />
                        {errors.transcription && <TableError>{errors.transcription.message}</TableError>}
                    </TableInputWrapper>
                    <TableInputWrapper>
                        <TableInput
                            {...register('russian', {
                                required: 'Required field',
                                pattern: {
                                    value: /^[А-Яа-яЁё -,]+$/,
                                    message: 'Cyrillic characters only'
                                },
                                onBlur: () => trigger('russian'),
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
})
