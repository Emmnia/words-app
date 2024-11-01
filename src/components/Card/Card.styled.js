import styled from "styled-components";

export const CardBody = styled.div`
    margin: 0 auto;
    padding: 20px;
    width: 350px;
    height: 250px;
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
`

export const CardHeader = styled.header``

export const CardWord = styled.h2``

export const CardTranscription = styled.p``

export const CardTranslationContent = styled.div``

export const CardTranslation = styled.p`
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`
export const CardButton = styled.button`
    margin: auto;
    padding: 10px 15px;
    text-align: center;
    font-family: "Wix Madefor Display", sans-serif;
    color: white;
    transition: 0.5s;
    background: linear-gradient(90deg, rgba(224, 117, 175, 1) 0%, rgba(187, 128, 185, 1) 21%, rgba(158, 136, 193, 1) 48%, rgba(116, 148, 204, 1) 81%, rgba(63, 163, 218, 1) 100%);
    background-size: 200% auto;
    box-shadow: 0 0 20px #eee;
    border-radius: 50px;
    border: none;
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

    &:focus {
        border: 1px solid #E55D87;
    }
`