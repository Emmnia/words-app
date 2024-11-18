import styled from "styled-components"

export const LoaderContainer = styled.div`
    margin: auto;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledLoader = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: animloader 1.1s linear infinite;

    @keyframes animloader {
        0% {
            box-shadow: -72px 0 rgba(255, 255, 255, 0.8) inset;
        }
        100% {
            box-shadow: 48px 0 rgba(255, 255, 255, 0.8) inset;
        }
    }
`