import { ModalWrapper, ModalFooter, ModalButton, } from './Modal.styled'
import { Checkbox } from '../Checkbox/Checkbox';
import { forwardRef } from 'react';

export const Modal = forwardRef(function Modal({ onClose, onCheck, showModalToday, children }, ref) {
    return (
        <ModalWrapper ref={ref}>
            {children}
            <ModalFooter>
                <ModalButton onClick={onClose}>Закрыть</ModalButton>
                <Checkbox
                    onChange={onCheck}
                    checked={!showModalToday}
                    label={'Не показывать сегодня'}
                />
            </ModalFooter>
        </ModalWrapper>
    )
})
