import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    margin-bottom: 30px;
    padding: 2rem 0;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 0 0 16px 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    z-index: 1;
`

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        justify-content: space-around;
    }
}
`
export const HeaderLogo = styled(NavLink)`
    display: flex;
    gap: 6px;
    align-items: center;
    text-decoration: none;
`
export const HeaderLogoImage = styled.img`
    width: 50px;
    height: 100%;

    @media (max-width: 370px) {
        width: 30px;
        height: 100%;
    }
`

export const HeaderLogoText = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: black;

    @media (max-width: 370px) {
        font-size: 16px;
    }
`

export const HeaderButton = styled.button`
    position: relative;
    padding: 10px 15px;
    text-align: center;
    font-family: "Wix Madefor Display", sans-serif;
    color: white;
    border-radius: 50px;
    background: linear-gradient(90deg, rgba(224, 117, 175, 1) 0%, rgba(187, 128, 185, 1) 21%, rgba(158, 136, 193, 1) 48%, rgba(116, 148, 204, 1) 81%, rgba(63, 163, 218, 1) 100%);
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
        background: linear-gradient(
            124deg,
            #e075af,
            #bb80b9,
            #9e88c1,
            #7494cc,
            #3fa3da,
            #E55D87,
            #5FC3E4,
            #E55D87
        );
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
`

export const HeaderNav = styled.nav``

export const HeaderNavList = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
`
export const HeaderNavItem = styled.li``

export const HeaderNavLink = styled(NavLink)`
    text-decoration: none;
    color: #737272;

    &.active {
    color: black;
    }

    &:hover {
    text-shadow: 3px 1px 2px #cfaefd;
}
`