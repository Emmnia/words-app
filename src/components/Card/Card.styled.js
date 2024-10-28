import styled from "styled-components";

export const CardBody = styled.div`
    margin: 0 auto;
    padding: 20px;
    width: 300px;
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
`

export const CardWord = styled.h2``

export const CardTranscription = styled.p``

export const CardTranslationContent = styled.div``

export const CardTranslation = styled.p`
    cursor: pointer;
`
export const CardButton = styled.button`
    margin: auto;
    padding: 10px 15px;
    text-align: center;
    font-family: "Wix Madefor Display", sans-serif;
    color: white;
    transition: 0.5s;
    background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4 51%, #E55D87 100%);
    background-size: 200% auto;
    box-shadow: 0 0 20px #eee;
    border-radius: 50px;
    border: none;
    outline: none;
    display: block;
    cursor: pointer;

    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }

    &:active {
        transform: scale(0.9);
    }
`