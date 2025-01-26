import CloseIcon from '@mui/icons-material/Close';
import { StyledModal, ModalContent, ModalHeader, ModalFooter, ModalButton } from './Modal.styled';
import { Checkbox } from '../Checkbox/Checkbox';
import { forwardRef, useEffect, useLayoutEffect, useImperativeHandle, useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader'
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../store/words-store';

export const Modal = observer(forwardRef(function Modal({ onClose }, ref) {
    const checkboxId = uuidv4();
    const { word, loading, wordUpdated } = wordsStore;
    const [showModalToday, setShowModalToday] = useLocalStorage('showModalToday', null);
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        showModal: () => setOpen(true),
        close: () => setOpen(false)
    }));

    const handleModalCheck = (event) => {
        const isChecked = event.target.checked;
        setShowModalToday(!isChecked);
    };

    const handleClose = () => {
        setOpen(false);
        onClose?.();
    };

    useLayoutEffect(() => {
        if (showModalToday) {
            setOpen(true);
        }
    }, [showModalToday]);

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [open]);

    useEffect(() => {
        if (wordUpdated) {
            setShowModalToday(true);
            wordsStore.setWordUpdated(false);
        }
    }, [setShowModalToday, wordUpdated, word]);

    return (
        <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <ModalContent>
                <ModalHeader>
                    <ModalButton
                        onClick={handleClose}
                        size="small"
                        aria-label="close"
                    >
                        <CloseIcon />
                    </ModalButton>
                </ModalHeader>

                {loading ? (
                    <Loader />
                ) : (word && (
                    <Card
                        key={word.id}
                        id={word.id}
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                        show={false}
                    />
                ))}

                <ModalFooter>
                    <Checkbox
                        label={`Don't show this again today`}
                        show={true}
                        onChange={handleModalCheck}
                        id={checkboxId}
                        checked={!showModalToday}
                    />
                </ModalFooter>
            </ModalContent>
        </StyledModal>
    );
}));