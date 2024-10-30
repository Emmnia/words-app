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