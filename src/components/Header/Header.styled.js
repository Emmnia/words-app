import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    margin-bottom: 20px;
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
`

export const HeaderLogo = styled(NavLink)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
`

