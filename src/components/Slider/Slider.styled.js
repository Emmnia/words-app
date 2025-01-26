import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const moveRight = keyframes`
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-10px);
    }

    100% {
            transform: translateX(0);
    }
`;

const moveLeft = keyframes`
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(10px);
    }

    100% {
        transform: translateX(0);
    }
`;

export const SliderContainer = styled.div`
    margin: 0 auto;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 599px) {
        width: 95%;
    }
`

export const SliderButton = styled.button`
    margin: auto;
    text-align: center;
    font-size: 40px;
    color: grey;
    background: transparent;
    border: none;
    display: block;
    cursor: pointer;
    filter: drop-shadow(3px 3px 5px #707070);

    &:hover {
        color: #171717;
    }

    &:active {
        transform: scale(0.9);
    }
`
export const SliderContent = styled.div`
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    will-change: transform, opacity;

    ${props => props.animation === 'previous' && css`
        animation: ${moveLeft} 1s forwards;
    `}
    ${props => props.animation === 'next' && css`
        animation: ${moveRight} 1s forwards;
    `}

    ${props => props.animation === 'appear' && css`
        animation: ${fadeIn} 0.5s ease-in-out;
    `}

    @media (max-width: 599px) {
        width: 100%;
    }
`
export const SliderMessageWrapper = styled.div`
    text-align: center;
`
export const SliderMessageText = styled.h2`
    margin: auto;
    width: min(500px, 90%);
`

export const SliderMessageButton = styled.button.attrs({
    type: 'button'
})`
    margin: 30px auto;
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
export const SliderImageWrapper = styled.div`
    margin: 0 auto;
    position: relative;
    width: fit-content;
`
export const SliderMessageImage = styled.img`
    width: 400px;
    height: 100%;
`

export const SliderMessageAnimation = styled.img`
    position: absolute;
    top: 37%;
    left: 44%;
    width: 100px;
`