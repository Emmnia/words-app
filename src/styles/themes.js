import { createTheme } from '@mui/material/styles';

const bgLight = 'linear-gradient(54deg, #E5C1DB 0%, #DBC4DD 28%, #D5C6DF 48%, #C0CBE4 68%, #B0D0E8 100%)';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: 'transparent',
            paper: '#f4f4f4',
        },
        text: {
            primary: '#000000',
            secondary: '#606060',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: bgLight,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                },
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0F1B2E',
            paper: '#1A2C3F',
        },
        text: {
            primary: '#E0E0E0',
            secondary: '#B0B0B0',
        },
    },
});

export const getTheme = (isDarkMode) => isDarkMode ? darkTheme : lightTheme;