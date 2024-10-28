import { CheckboxLabel, CheckboxInput, CheckboxText, CheckboxSymbol, CheckboxIcon } from './Checkbox.styled'

export const Checkbox = ({ onChange, checked, label }) => {
    return (
        <CheckboxLabel>
            <CheckboxInput onChange={onChange} checked={checked} />
            <CheckboxSymbol>
                <CheckboxIcon>
                    <path d="M4 14l8 7L24 7" />
                </CheckboxIcon>
            </CheckboxSymbol>
            <CheckboxText>{label}</CheckboxText>
        </CheckboxLabel>
    )
}
