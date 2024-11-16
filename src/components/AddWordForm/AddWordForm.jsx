import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { WordsContext } from "../../store/words-context";
import { useContext } from "react";
import { FormWrapper, FormHeading, StyledForm, FormInputsWrapper, FormInputWrapper, FormInput, FormError, FormSubmit, FormSubmitWrapper } from "./AddWordForm.styled";

export const AddWordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        trigger,
    } = useForm();

    const { sendWordToServer, setNewWord } = useContext(WordsContext)

    const onValid = async (data) => {

        const word = {
            id: uuidv4(),
            english: data.english,
            transcription: `[${data.transcription}]`,
            russian: data.russian,
            tags: data.tags,
        }
        setNewWord(word);
        await sendWordToServer(word);
        toast.success("Слово добавлено!");
        setNewWord({ id: "", english: "", transcription: "", russian: "", tags: "" });
    };

    const onInvalid = async () => {
        toast.error("Слово не добавлено. Корректно заполните все поля");
    };

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setValue(name, value);
        await trigger(name);
    };

    return (
        <FormWrapper>
            <FormHeading>Добавить слово</FormHeading>
            <StyledForm onSubmit={handleSubmit(onValid, onInvalid)}>
                <FormInputsWrapper>
                    <FormInputWrapper>
                        <FormInput
                            placeholder="english"
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
                        {errors.english && <FormError>{errors.english.message}</FormError>}
                    </FormInputWrapper>

                    <FormInputWrapper>
                        <FormInput
                            placeholder="transcription"
                            {...register("transcription", {
                                required: "Заполните это поле",
                                onBlur: () => trigger("transcription"),
                            })}
                            onChange={handleChange}
                        />
                        {errors.transcription && <FormError>{errors.transcription.message}</FormError>}
                    </FormInputWrapper>

                    <FormInputWrapper>
                        <FormInput
                            placeholder="russian"
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
                        {errors.russian && <FormError>{errors.russian.message}</FormError>}
                    </FormInputWrapper>

                    <FormInputWrapper>
                        <FormInput
                            placeholder="tags"
                            {...register("tags", {
                                required: "Заполните это поле",
                                onBlur: () => trigger("tags"),
                            })}
                            onChange={handleChange}
                        />
                        {errors.tags && <FormError>{errors.tags.message}</FormError>}
                    </FormInputWrapper>
                </FormInputsWrapper>
                <FormSubmitWrapper>
                    <FormSubmit type="submit" />
                </FormSubmitWrapper>
            </StyledForm>
        </FormWrapper>
    );
}