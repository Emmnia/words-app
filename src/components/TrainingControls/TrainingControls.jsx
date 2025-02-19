import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '@mui/material/styles';

import { ControlsButton, ControlsText, ControlsWrapper } from './TrainingControls.styled';
import { Checkbox } from '../Checkbox/Checkbox';

export const TrainingControls = ({ onClick, onChange, checked, count }) => {
    const checkboxId = uuidv4();
    const theme = useTheme();

    return (
        <ControlsWrapper>
            <ControlsButton onClick={onClick} theme={theme}>Start new revision</ControlsButton>
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
