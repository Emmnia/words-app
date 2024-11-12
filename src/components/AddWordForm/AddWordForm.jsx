import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { WordsContext } from "../../store/words-context";
import { useContext } from "react";

export const AddWordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        trigger,
    } = useForm();

    const { sendWordToServer, setNewWord } = useContext(WordsContext)

    const onSubmit = async (data) => {
        const word = {
            id: uuidv4(),
            english: data.english,
            transcription: data.transcription,
            russian: data.russian,
            tags: data.tags,
            tags_json: data.tags_json,
        }
        setNewWord(word);
        await sendWordToServer(word);
        setNewWord({ id: "", english: "", transcription: "", russian: "", tags: "", tags_json: "" });
    };

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setValue(name, value);
        await trigger(name);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder="english"
                {...register("english", {
                    required: "Заполните это поле",
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Введите только латиницу"
                    },
                    onBlur: () => trigger("english"),
                })}
                onChange={handleChange}
            />
            {errors.english && <span>{errors.english.message}</span>}

            <input
                placeholder="transcription"
                {...register("transcription", {
                    required: "Заполните это поле",
                    onBlur: () => trigger("transcription"),
                })}
                onChange={handleChange}
            />
            {errors.transcription && <span>{errors.transcription.message}</span>}

            <input
                placeholder="russian"
                {...register("russian", {
                    required: "Заполните это поле",
                    pattern: {
                        value: /^[А-Яа-яЁё]+$/,
                        message: "Введите только кириллицу"
                    },
                    onBlur: () => trigger("russian"),
                })}
                onChange={handleChange}
            />
            {errors.russian && <span>{errors.russian.message}</span>}

            <input
                placeholder="tags"
                {...register("tags", {
                    required: "Заполните это поле",
                    onBlur: () => trigger("tags"),
                })}
                onChange={handleChange}
            />
            {errors.tags && <span>{errors.tags.message}</span>}

            <input
                placeholder="tags_json"
                {...register("tags_json", {
                    required: "Заполните это поле",
                    onBlur: () => trigger("tags_json"),
                })}
                onChange={handleChange}
            />
            {errors.tags_json && <span>{errors.tags_json.message}</span>}

            <input type="submit" />
        </form>
    );
}