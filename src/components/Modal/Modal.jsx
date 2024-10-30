import { ModalWrapper, ModalFooter, ModalButton, } from './Modal.styled'
import { Checkbox } from '../Checkbox/Checkbox';
import { forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Modal = forwardRef(function Modal({ onClose, onChange, checked, children }, ref) {
    const checkboxId = uuidv4();

    return (
        <ModalWrapper ref={ref}>
            {children}
            <ModalFooter>
                <ModalButton onClick={onClose}>Закрыть</ModalButton>
                <Checkbox
                    label={'Больше не показывать сегодня'}
                    show={true}
                    onChange={onChange}
                    checked={checked}
                    id={checkboxId}
                />
            </ModalFooter>
        </ModalWrapper>
    )
})
