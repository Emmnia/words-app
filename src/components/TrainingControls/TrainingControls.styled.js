import styled from "styled-components"

export const ControlsWrapper = styled.div`
    margin-top: 70px;
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
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2px;
    color: white;
    transition: 0.5s;
    background-image: linear-gradient(90deg, #e075af 0%, #bb80b9 21%, #9e88c1 48%, #7494cc 81%, #3fa3da 100%);
    background-size: 200% auto;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
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
        transform: scale(0.95);
    }

    &:focus {
        border: 1px solid #E55D87;
    }
`

export const ControlsText = styled.span``