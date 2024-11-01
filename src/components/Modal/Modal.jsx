import { ModalWrapper, ModalHeader, ModalFooter, ModalButton, ModalButtonIcon } from './Modal.styled'
import { Checkbox } from '../Checkbox/Checkbox';
import { forwardRef } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

export const Modal = forwardRef(function Modal({ onClose, onChange, checked, children }, ref) {
    const checkboxId = uuidv4();

    return (
        <ModalWrapper ref={ref}>
            <ModalHeader>
                <ModalButton onClick={onClose}><ModalButtonIcon icon={faXmark} /></ModalButton>
            </ModalHeader>
            {children}
            <ModalFooter>
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