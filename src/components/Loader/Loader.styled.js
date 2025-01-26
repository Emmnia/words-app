import styled, { keyframes } from 'styled-components'

const animloader = keyframes`
    0% {
        box-shadow: -72px 0 #dfdff7 inset;
    }
    100% {
        box-shadow: 48px 0 #dfdff7 inset;
    }
`
export const LoaderContainer = styled.div`
    margin: auto;
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`
export const StyledLoader = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${animloader} 1.1s linear infinite;
`