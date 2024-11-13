import styled from "styled-components";

export const TableTitle = styled.h2`
    text-align: center;
`

export const TableWrapper = styled.div`
    margin: 0 auto;
    padding: 5px;
    width: min(100%, 1170px);
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
    color: white;
    transition: 0.5s;
    background-image: linear-gradient(90deg, #e075af 0%, #bb80b9 21%, #9e88c1 48%, #7494cc 81%, #3fa3da 100%);
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