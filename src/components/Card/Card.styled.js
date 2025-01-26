import styled from 'styled-components';

export const CardBody = styled.div`
    margin: 0 auto;
    padding: 20px;
    width: 450px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);

    @media (max-width: 599px) {
        width: 100%;
    }
`
export const CardHeader = styled.header`
    justify-self: flex-start;
`
export const CardWord = styled.h2`
    font-size: 40px;
`

export const CardTranscription = styled.p`
    margin-bottom: 50px;
    font-size: 25px;
`

export const CardButton = styled.button`
    display: flex;
    padding: 10px 20px;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    font-family: "Wix Madefor Display", sans-serif;
    transition: 0.5s;
    background-color: #ffffff;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
    border-radius: 50px;
    border: none;
    cursor: pointer;

    &:hover {
        text-decoration: none;
    }

    &:active {
        transform: scale(0.95);
    }
`

export const CardButtonImage = styled.img`
    width: 50px;
    height: 100%
`

export const CardButtonText = styled.span`
    font-size: 20px;
`