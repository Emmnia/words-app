import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
        --toastify-color-light: rgba(255, 255, 255, 0.12);
        --toastify-text-color-light: black;
        --toastify-color-success: #44A1D9;
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
    }

    body {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0;
        overflow-x: hidden;
        margin-right: calc(-1 * (100vw - 100%));
        font-family: "Wix Madefor Display", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: rgba(255, 255, 255, 0.3);
        background-image: linear-gradient(90deg, rgba(224, 117, 175, 1) 0%, rgba(187, 128, 185, 1) 21%, rgba(158, 136, 193, 1) 48%, rgba(116, 148, 204, 1) 81%, rgba(63, 163, 218, 1) 100%);
        background-blend-mode: screen;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .container {
        margin: 0 auto;
        padding: 1rem;
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