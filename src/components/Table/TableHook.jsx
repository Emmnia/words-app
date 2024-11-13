import { TextField } from "@material-ui/core"
import { useController, useForm } from "react-hook-form"

const Input = ({ control, name }) => {
    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields },
    } = useController({
        name,
        control,
        rules: { required: true },
    })

    return (
        <TextField
            onChange={field.onChange} // send value to hook form
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value} // input value
            name={field.name} // send down the input name
            inputRef={field.ref} // send input ref, so we can focus on input when error appear
        />
    )
}

function Input(props) {
    const { field, fieldState } = useController(props);

    return (
        <div>
            <input {...field} placeholder={props.name} />
            <p>{fieldState.isTouched && "Touched"}</p>
            <p>{fieldState.isDirty && "Dirty"}</p>
            <p>{fieldState.invalid ? "invalid" : "valid"}</p>
        </div>
    );
}

export default function Forms() {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            FirstName: ""
        },
        mode: "onChange"
    });
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <h1>useController</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} name="FirstName" rules={{ required: true }} />
                <input type="submit" />
            </form>
        </div>
    );
}


import { useForm } from "react-hook-form"

export default function App() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
        </form>
    )
}


// вынести в отдельный компонент редактирование??