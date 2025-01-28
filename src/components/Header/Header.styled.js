import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    margin-bottom: 50px;
    padding: 30px 0;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 0 0 16px 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    z-index: 1;
`

export const HeaderBox = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 5px;
    width: min(100%, 1170px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1190px) {
        justify-content: space-around;
    }
}
`
export const HeaderLogo = styled(NavLink)`
    display: flex;
    gap: 10px;
    align-items: center;
    text-decoration: none;
`
export const HeaderLogoImage = styled.img`
    width: 50px;
    height: 100%;
    filter: drop-shadow(3px 3px 5px #707070);

    @media (max-width: 370px) {
        width: 30px;
        height: 100%;
    }
`
export const HeaderLogoText = styled.span`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #171717;
    text-shadow: 3px 3px 5px #8c8c8c;

    @media (max-width: 370px) {
        font-size: 16px;
    }
`
export const HeaderButton = styled.button`
    position: relative;
    padding: 10px 15px;
    text-align: center;
    font-family: "Wix Madefor Display", sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    border-radius: 50px;
    background-image: ${(props) =>
        props.isDarkMode
            ? 'linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%)'
            : 'linear-gradient(to right, #e075af 0%, #5FC3E4 51%, #e075af 100%)'};
    border: none;
    outline: none;
    display: block;
    cursor: pointer;

    &::before {
        position: absolute;
        content: "";
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        left: -2px;
        top: -2px;
        background: ${(props) =>
        props.isDarkMode
            ? 'linear-gradient(124deg, #1D2B64, #F8CDDA, #1D2B64, #5FC3E4, #1D2B64)'
            : 'linear-gradient(124deg, #e075af, #bb80b9, #E55D87, #5FC3E4, #E55D87)'};
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        animation: move 20s linear infinite;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
        border-radius: 50px;
    }

    &::after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 50px;
    }

    @keyframes move {
        0% {background-position: 0 0;}
        50% {background-position: 400% 0;}
        100% {background-position: 0 0;}
    }

    &:active {
        transform: scale(0.9);
        z-index: 2;
    }

    @media (max-width: 899px) {
        letter-spacing: normal;
    }
`
export const HeaderNav = styled.nav``

export const HeaderNavList = styled.ul`
    width: 100%;
    display: flex;
    gap: 20px;
    list-style-type: none;

    @media (max-width: 899px) {
        flex-direction: column;
        align-items: center;
    }
`
export const HeaderNavItem = styled.li`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
`

export const HeaderNavLink = styled(NavLink)`
    position: relative;
    text-decoration: none;
    line-height: 1.4;
    color: #737272;

    &.active {
        color: #171717;
    }

    &:hover:before {
        clip: rect(0, 190px, 190px, 0);
    }

    &:before {
        display: inline-block;
        position: absolute;
        left: 0;
        top: -1px;
        width: 100%;
        content: attr(data-content);
        line-height: 1.4;
        color: white;
        clip: rect(0, 0, 190px, 0);
        -webkit-transition: clip cubic-bezier(0.25, 0.46, 0.45, 0.94) 700ms;
        transition: clip cubic-bezier(0.25, 0.46, 0.45, 0.94) 700ms;
    }
}
`
