import styled, { keyframes } from "styled-components";

const open = keyframes`
    from { opacity: 0 }
    to   { opacity: 1 }
`

export const TableTitle = styled.h2`
    text-align: center;
`
export const TableWrapper = styled.div`
    margin: 0 auto;
    width: min(95%, 1170px);
`
export const StyledTable = styled.table`
    width: 100%;
    text-align: center;
    -webkit-box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
    background-color: rgba(255, 255, 255, 0.7);
`

export const TableHead = styled.thead``

export const TableHeader = styled.tr``

export const TableWordNumber = styled.th`
    width: 30px;
    background: rgba(137, 0, 168, 0.1);
    background-blend-mode: darken;
`
export const TableContent = styled.th`
    padding: 10px;
    width: 300px;
    background: rgba(137, 0, 168, 0.1);
    background-blend-mode: darken;
`
export const TableActions = styled.th`
    width: 100px;
    background: rgba(137, 0, 168, 0.1);
    background-blend-mode: darken;

    @media (max-width: 768px) {
        width: 50px;
    }
`
export const TableBody = styled.tbody``

export const LoadMoreButton = styled.button`
    margin: 30px auto;
    padding: 10px 15px;
    text-align: center;
    font-family: "Wix Madefor Display", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    transition: 0.5s;
    background-image: linear-gradient(90deg, #e075af 0%, #bb80b9 21%, #9e88c1 48%, #7494cc 81%, #3fa3da 100%);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
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
}
`
export const StyledTableRow = styled.tr`
    &:nth-child(even) {
        background: rgba(137, 0, 168, 0.05);
        background-blend-mode: darken;
    }
`
export const TableData = styled.td``

export const TableForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const TableInput = styled.input`
    margin: 0;
    padding: 0;
    width: min(100%, 180px);
    font-family: "Wix Madefor Display", sans-serif;
    font-size: 16px;
    text-align: center;
    border-style: none none solid;
    border-width: 1px;
    border-color: black;
    outline: none;
    background-color: transparent;
`
export const TableError = styled.p`
    color: #E55D87;
`
export const TableDataWrapper = styled.p``

export const TableInputWrapper = styled.div``

export const TableControlsButton = styled.button`
    padding: 10px;
    border: none;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }

    &:active {
        transform: scale(0.9);
    }
`

export const TableWarningWrapper = styled.div`
    padding: 20px;
    min-height: 100px;
    max-width: 90%;
    border-radius: 10px;
    border: none;
    background-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);

    &:popover-open {
        animation: ${open} 0.7s forwards;
    }

    &::backdrop {
        background: rgba(0, 0, 0, 0.1);
        transition: 3s ease-in;
    }
`

export const TableWarningText = styled.p`
    font-weight: bolder;
    color: #E55D87;
`

export const TableWarningButton = styled.button`
    margin: 20px;
    padding: 10px 15px;
    text-align: center; 
    font-family: "Wix Madefor Display", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
    border-radius: 50px;
    border: none;
    cursor: pointer;

    &:hover {
        filter: brightness(0.95);
    }

    &:active {
        transform: scale(0.95);
    }

    &:focus {
        border: 1px solid #E55D87;
    }
`

export const TableWarningButtonText = styled.span``