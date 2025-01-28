import { createTheme } from '@mui/material/styles';

const bgLight = 'linear-gradient(54deg, #E5C1DB 0%, #DBC4DD 28%, #D5C6DF 48%, #C0CBE4 68%, #B0D0E8 100%)';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: 'transparent',
            paper: '#ffff',
        },
        text: {
            primary: '#000000',
            secondary: '#606060',
            error: '#E55D87'
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: bgLight,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    transition: 'background 0.5s ease, color 0.5s ease',
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
            paper: '#1A2C3F'
        },
        text: {
            primary: '#E0E0E0',
            secondary: '#B0B0B0',
            error: '#E55D87'
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#0F1B2E',
                    transition: 'background 0.5s ease, color 0.5s ease',
                },
            },
        },
    },
});

export const getTheme = (isDarkMode) => isDarkMode ? darkTheme : lightTheme;