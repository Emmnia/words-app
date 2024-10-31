import { Checkbox } from "../Checkbox/Checkbox"
import { v4 as uuidv4 } from 'uuid'
import { ControlsButton, ControlsText, ControlsWrapper } from "./TrainingControls.styled"

export const TrainingControls = ({ onClick, onChange, checked, count, getWordForm }) => {
    const checkboxId = uuidv4();

    return (
        <ControlsWrapper>
            <ControlsButton onClick={onClick}>Начать новую тренировку</ControlsButton>
            <ControlsText>Вы повторили {count} {getWordForm(count)}</ControlsText>
            <Checkbox
                label={'Не показывать выученные'}
                show={true}
                onChange={onChange}
                checked={checked}
                id={checkboxId}
            />
        </ControlsWrapper>
    )
}
