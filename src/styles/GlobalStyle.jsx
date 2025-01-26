import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
        --toastify-color-light: rgba(255, 255, 255, 0.12);
        --toastify-text-color-light: black;
        --toastify-color-success: #3fa3da;
        --toastify-color-progress-success: #3fa3da;
        --toastify-color-error: #E55D87;
        --toastify-color-progress-error: #E55D87;
        --toastify-color-info: #b18bb0 ;
        --toastify-color-progress-info: #b18bb0 ;
        --bg-light: linear-gradient(54deg, #E5C1DB 0%, #DBC4DD 28%, #D5C6DF 48%, #C0CBE4 68%, #B0D0E8 100%);
        --bg-dark: #0F1B2E;  
    }

    * {
        box-sizing: border-box;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        font-family: "Wix Madefor Display", sans-serif;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${props => props.isDarkMode ? 'var(--bg-dark)' : 'var(--bg-light)'};
        background-repeat: no-repeat;
        background-size: cover;
        color: ${props => props.isDarkMode ? '#E0E0E0' : '#000000'};
        transition: background 0.3s ease, color 0.3s ease;
        overflow-x: hidden;
        width: 100%;
        max-width: 100%;
    }

    body:has(dialog[open]) {
        overflow: hidden;
    }

    :is(a, button, input, textarea):focus {
        outline: 1px solid #E55D87;
    }

    .container {
        margin: 0 auto;
        padding: 5px;
        width: min(100%, 1170px);
    }

    table,
    th,
    td {
        border: 1px dotted black;
        border-collapse: collapse;
    }
`