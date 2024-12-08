import { Modal as MuiModal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { Checkbox } from '../Checkbox/Checkbox';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader'
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../store/words-store';

const StyledModal = styled(MuiModal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    padding: '20px',
    position: 'relative',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflow: 'auto',
}));

const ModalHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '16px',
});

const ModalFooter = styled(Box)({
    marginTop: '16px',
});

export const ModalMUI = observer(forwardRef(function ModalMUI({ onClose }, ref) {
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

    useEffect(() => {
        if (showModalToday) {
            setOpen(true);
        }
    }, [showModalToday]);

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
                    <IconButton
                        onClick={handleClose}
                        size="small"
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
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