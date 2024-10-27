import { ModalWrapper, ModalFooter, ModalButton, ModalInput, ModalInputLabel } from './Modal.styled'
import { forwardRef } from 'react';

export const Modal = forwardRef(function Modal({ onClose, onCheck, showModalToday, children }, ref) {
    return (
        <ModalWrapper ref={ref}>
            {children}
            <ModalFooter>
                <ModalButton onClick={onClose}>Закрыть</ModalButton>
                <ModalInputLabel>
                    <ModalInput onChange={onCheck} checked={!showModalToday} />
                    Не показывать сегодня
                </ModalInputLabel>
            </ModalFooter>
        </ModalWrapper>
    )
})
