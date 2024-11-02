import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
        --toastify-color-light: rgba(255, 255, 255, 0.12);
        --toastify-text-color-light: black;
        --toastify-color-success: #EA72AC;
        --toastify-color-progress-success: linear-gradient(
        to right,
        #4cd964,
        #5ac8fa,
        #007aff,
        #34aadc,
        #5856d6,
        #ff2d55);    
    }

    * {
        box-sizing: border-box;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
    }

    body {
        margin: 0;
        font-family: "Wix Madefor Display", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: rgba(255, 255, 255, 0.3);
        background-image: linear-gradient(54deg, #e8a2c8 0%, #cfa9ce 28%, #bdb0d3 48%, #a2b6da 68%, #7dbfe2 100%);
        background-blend-mode: screen;
        background-repeat: no-repeat;
        background-size: cover;
        // scrollbar-gutter: stable;
    }

    body:has(dialog[open]) {
        overflow: hidden;
    }

    .container {
        margin: 0 auto;
        padding: 5px;
        width: min(100%, 1170px);
    }

    .button {
        padding: 10px;
        border: none;
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;
    }

    .button:hover {
        transform: scale(1.2);
    }

    .button:active {
        transform: scale(0.9);
    }
`