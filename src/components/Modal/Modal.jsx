import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogFooter from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react-lite';
import { forwardRef, useEffect } from 'react';
import { wordsStore } from '../../store/words-store';
import { Checkbox } from '../Checkbox/Checkbox';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from "@uidotdev/usehooks";

export const Modal = observer(forwardRef(function Modal({ onClose }, ref) {
    const checkboxId = uuidv4();

    const { word, loading, wordUpdated } = wordsStore;

    const [showModalToday, setShowModalToday] = useLocalStorage('showModalToday', null);

    const handleModalCheck = (event) => {
        const isChecked = event.target.checked;
        setShowModalToday(!isChecked);
    };

    const handleClose = () => {
        onClose();
        ref.current?.close();
    };

    useEffect(() => {
        if (showModalToday && ref.current) {
            ref.current.showModal();
        }
    }, [ref, showModalToday]);

    useEffect(() => {
        if (wordUpdated) {
            setShowModalToday(true);
            wordsStore.setWordUpdated(false);
        }
    }, [setShowModalToday, wordUpdated, word]);

    return (
        <Dialog
            open={!!showModalToday}
            onClose={handleClose}
            fullWidth
            maxWidth="xs"
            PaperProps={{
                sx: {
                    borderRadius: '10px',
                    padding: '30px 50px',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '@media (max-width: 599px)': {
                        padding: '20px 10px',
                        width: '90%',
                        maxWidth: '340px'
                    }
                }
            }}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        transition: '3s ease-in'
                    }
                }
            }}
        >
            <IconButton
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: '#E55D87',
                    border: '1px solid #E55D87'
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent sx={{ textAlign: 'center', padding: '20px 0' }}>
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
            </DialogContent>

            <DialogFooter sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Checkbox
                    label={`Don't show this again today`}
                    show={true}
                    onChange={handleModalCheck}
                    id={checkboxId}
                    checked={!showModalToday}
                />
            </DialogFooter>
        </Dialog>
    )
}))