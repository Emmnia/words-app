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
    justify-content: space-between;
    align-items: center;
`

export const ModalButton = styled.button.attrs({
    type: 'button'
})`
font-family: "Wix Madefor Display"
`
export const ModalInput = styled.input.attrs({
    type: "checkbox",
    id: "modal-checkbox"
})``

export const ModalInputLabel = styled.label.attrs({
    htmlFor: "modal-checkbox"
})``