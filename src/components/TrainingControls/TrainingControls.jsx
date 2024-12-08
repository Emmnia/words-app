import { Checkbox } from "../Checkbox/Checkbox"
import { v4 as uuidv4 } from 'uuid'
import { ControlsButton, ControlsText, ControlsWrapper } from "./TrainingControls.styled"

export const TrainingControls = ({ onClick, onChange, checked, count }) => {
    const checkboxId = uuidv4();

    return (
        <ControlsWrapper>
            <ControlsButton onClick={onClick}>Start new revision</ControlsButton>
            <ControlsText>Words revised: {count}</ControlsText>
            <Checkbox
                label={`Don't show learned words`}
                show={true}
                onChange={onChange}
                checked={checked}
                id={checkboxId}
            />
        </ControlsWrapper>
    )
}
