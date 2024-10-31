import styled from "styled-components"

export const ControlsWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ControlsButton = styled.button.attrs({
    type: 'button'
})`
    padding: 10px 15px;
    text-align: center;
    font-family: "Wix Madefor Display", sans-serif;
    color: white;
    transition: 0.5s;
    background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4 51%, #E55D87 100%);
    background-size: 200% auto;
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

export const ControlsText = styled.span``