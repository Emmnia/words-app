import styled from "styled-components";

export const CardBody = styled.div`
    margin: 0 auto;
    padding: 20px;
    width: 400px;
    height: 300px;
    text-align: center;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
`
export const CardHeader = styled.header`
    margin-bottom: 30px;
`
export const CardWord = styled.h2``

export const CardTranscription = styled.p`
    margin-bottom: 50px;
`

export const CardButton = styled.button`
    display: flex;
    margin: auto;
    padding: 10px 20px;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    font-family: "Wix Madefor Display", sans-serif;
    transition: 0.5s;
    box-shadow: 0 0 20px #eee;
    border-radius: 50px;
    border: none;
    cursor: pointer;

    &:hover {
        text-decoration: none;
    }

    &:active {
        transform: scale(0.9);
    }

    &:focus {
        border: 1px solid #E55D87;
    }
`

export const CardButtonImage = styled.img`
    width: 30px;
    height: 100%
`

export const CardButtonText = styled.span``