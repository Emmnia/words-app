import { CheckboxLabel, CheckboxInput, CheckboxText, CheckboxSymbol, CheckboxIcon } from './Checkbox.styled'

export const Checkbox = ({ onChange, label, show, checked, id }) => {
    if (!show) return null

    return (
        <CheckboxLabel htmlFor={id}>
            <CheckboxInput onChange={onChange} checked={checked} id={id} />
            <CheckboxSymbol>
                <CheckboxIcon>
                    <path d="M4 14l8 7L24 7" />
                </CheckboxIcon>
            </CheckboxSymbol>
            <CheckboxText>{label}</CheckboxText>
        </CheckboxLabel>
    )
}

// сделать айди-ключи

// import { v4 as uuidv4 } from 'uuid';





// const [checkboxes, setCheckboxes] = useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
// });

// // Обработчик изменения состояния чекбоксов
// const handleCheckboxChange = (key) => {
//     setCheckboxes((prev) => ({
//         ...prev,
//         [key]: !prev[key], // Переключаем состояние
//     }));
// };

// return (
//     <div>
//         <Checkbox
//             onChange={() => handleCheckboxChange('checkbox1')}
//             checked={checkboxes.checkbox1}
//             label="Checkbox 1"
//         />
//         <Checkbox
//             onChange={() => handleCheckboxChange('checkbox2')}
//             checked={checkboxes.checkbox2}
//             label="Checkbox 2"
//         />
//         <Checkbox
//             onChange={() => handleCheckboxChange('checkbox3')}
//             checked={checkboxes.checkbox3}
//             label="Checkbox 3"
//         />
//     </div>
// );