import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ModalWrapper = styled.dialog`
    padding: 30px 50px;
    text-align: center;
    border: none;
    scrollbar-gutter: auto;

    &::backdrop {
        background: rgba(0, 0, 0, 0.5);
        transition: 5s ease-in;
    }
`
export const ModalHeader = styled.header`
    margin-bottom: 30px;
    display: flex;
`

export const ModalButton = styled.button.attrs({
    type: 'button'
})`
    margin-left: auto;
    border: 1px solid #E55D87;
    border-radius: 0.1em;
    width: 1.5em;
    height: 1.5em;
    background-color: transparent;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
    }
`
export const ModalButtonIcon = styled(FontAwesomeIcon)`
    color: #E55D87;
`

export const ModalFooter = styled.footer`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`