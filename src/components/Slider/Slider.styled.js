import styled, { css } from "styled-components"

export const SliderContainer = styled.div`
    margin: 0 auto;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 20px;
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
    transition: transform 0.5s ease-in-out;
    will-change: transform;

    ${props => props.animation === 'previous' && css`
        animation: moveLeft 1s forwards;
    `}
    ${props => props.animation === 'next' && css`
        animation: moveRight 1s forwards;
    `}

    @keyframes moveRight {
        0% {
            transform: translateX(0);
        }

        50% {
            transform: translateX(-10px);
        }

        100% {
            transform: translateX(0);
        }
    }

    @keyframes moveLeft {
        0% {
            transform: translateX(0);
        }

        50% {
            transform: translateX(10px);
        }

        100% {
            transform: translateX(0);
        }
    }
`