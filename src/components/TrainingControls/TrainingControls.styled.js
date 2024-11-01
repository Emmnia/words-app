import styled from "styled-components"

export const ControlsWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ControlsButton = styled.button.attrs({
    type: 'button'
})`
    padding: 10px 15px;
    text-align: center;
    font-family: "Wix Madefor Display", sans-serif;
    color: white;
    transition: 0.5s;
    background-image: linear-gradient(90deg, rgba(224, 117, 175, 1) 0%, rgba(187, 128, 185, 1) 21%, rgba(158, 136, 193, 1) 48%, rgba(116, 148, 204, 1) 81%, rgba(63, 163, 218, 1) 100%);
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