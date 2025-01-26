import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const DayNightSwitch = styled(Switch)({
    width: 71,
    height: 34,
    padding: 0,
    margin: 0,
    '& .MuiSwitch-switchBase': {
        padding: 1,
        margin: 1,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(26px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#749DD6',
                opacity: 1,
                border: 0,
            },
            '& .MuiSwitch-thumb': {
                backgroundColor: '#FFE5B5',
                transform: 'rotate(0deg)',
                width: 30,
                height: 30,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    backgroundImage: `
            radial-gradient(2px 2px at 35% 45%, #E8CDA5, transparent),
            radial-gradient(3px 3px at 65% 55%, #E8CDA5, transparent),
            radial-gradient(3px 3px at 45% 25%, #E8CDA5, transparent)
            `,
                    backgroundSize: 'cover',
                }
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#ffc',
        width: 30,
        height: 30,
        borderRadius: '50%',
        transition: 'background-color 500ms, transform 500ms',
        transform: 'rotate(-45deg)',
    },
    '& .MuiSwitch-track': {
        borderRadius: 34,
        backgroundColor: '#8bcceb',
        opacity: 1,
        transition: 'background-color 500ms',
    },
});

export const ThemeToggle = ({ isDarkMode, onToggle }) => {
    return (
        <div style={{ zIndex: 7 }}>
            <DayNightSwitch
                checked={isDarkMode}
                onChange={onToggle}
                inputProps={{ 'aria-label': 'theme toggle' }}
            />
        </div>
    );
};