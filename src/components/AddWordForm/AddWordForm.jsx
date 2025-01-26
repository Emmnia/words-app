import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../store/words-store';
import { FormWrapper, FormHeading, StyledForm, FormInputsWrapper, FormInputWrapper, FormInput, FormError, FormNote, FormSubmit, FormSubmitWrapper } from './AddWordForm.styled';

export const AddWordForm = observer(() => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        trigger,
        reset,
    } = useForm();

    const { sendWordToServer, setNewWord } = wordsStore;

    const onValid = async (data) => {
        const word = {
            id: uuidv4(),
            english: data.english,
            transcription: `[${data.transcription}]`,
            russian: data.russian,
            tags: ' ',
        }
        setNewWord(word);
        await sendWordToServer(word);
        toast.success('Word added!');
        reset();
        setNewWord({ id: '', english: '', transcription: '', russian: '', tags: '' });
    };

    const onInvalid = () => {
        toast.error('Word not added. Fill out all the fields correctly');
    };

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setValue(name, value);
        await trigger(name);
    };

    return (
        <FormWrapper>
            <FormHeading>Add New Word</FormHeading>
            <StyledForm onSubmit={handleSubmit(onValid, onInvalid)}>
                <FormInputsWrapper>
                    <FormInputWrapper>
                        <FormInput
                            placeholder="english"
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
                        {errors.english && <FormError>{errors.english.message}</FormError>}
                    </FormInputWrapper>

                    <FormInputWrapper>
                        <FormInput
                            placeholder="transcription"
                            {...register('transcription', {
                                required: 'Required field',
                                onBlur: () => trigger('transcription'),
                            })}
                            onChange={handleChange}
                        />
                        {errors.transcription && <FormError>{errors.transcription.message}</FormError>}
                        <FormNote>*Square brackets [ ] will be added automatically on submit</FormNote>
                    </FormInputWrapper>

                    <FormInputWrapper>
                        <FormInput
                            placeholder="russian"
                            {...register('russian', {
                                required: 'Required field',
                                pattern: {
                                    value: /^[А-Яа-яЁё ,-]+$/,
                                    message: 'Cyrillic characters only'
                                },
                                onBlur: () => trigger('russian'),
                            })}
                            onChange={handleChange}
                        />
                        {errors.russian && <FormError>{errors.russian.message}</FormError>}
                    </FormInputWrapper>
                </FormInputsWrapper>
                <FormSubmitWrapper>
                    <FormSubmit type="submit" />
                </FormSubmitWrapper>
            </StyledForm>
        </FormWrapper>
    );
})