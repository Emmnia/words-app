import styled from 'styled-components'

export const ControlsWrapper = styled.div`
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 599px) {
        flex-direction: column;
        gap: 20px;
    }
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
    background-image: ${(props) =>
        props.theme.palette.mode === 'dark'
            ? 'linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%)'
            : 'linear-gradient(to right, #e075af 0%, #5FC3E4 51%, #e075af 100%)'};
    background-size: 200% auto;
    box-shadow: ${(props) =>
        props.theme.palette.mode === 'dark'
            ? '0 15px 35px rgba(255, 255, 255, 0.1), 0 5px 15px rgba(255, 255, 255, 0.08)'
            : '0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19)'};
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