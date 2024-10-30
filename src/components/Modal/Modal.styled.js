import styled from "styled-components"

export const ModalWrapper = styled.dialog`
    padding: 30px;
    text-align: center;
    border: none;
    scrollbar-gutter: auto;
`
export const ModalFooter = styled.footer`
    margin-top: 50px;
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
`

export const ModalButton = styled.button.attrs({
    type: 'button'
})`
    padding: 10px 15px;
    text-align: center;    
    font-family: "Wix Madefor Display";
    border-radius: 50px;
    border: 1px solid #E55D87;
    background-color: transparent;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
    }
`