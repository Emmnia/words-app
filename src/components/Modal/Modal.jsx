import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react-lite';
import { forwardRef, useState, useEffect } from 'react';
import { wordsStore } from '../../store/words-store';
import { Checkbox } from '../Checkbox/Checkbox';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';
import { v4 as uuidv4 } from 'uuid';

export const Modal = observer(forwardRef(function Modal({ onClose }, ref) {
    const checkboxId = uuidv4();

    const { word, loading, wordUpdated } = wordsStore;

    const [showModalToday, setShowModalToday] = useState(() => {
        const storedValue = localStorage.getItem('showModalToday');
        return storedValue !== 'false';
    });

    const handleModalCheck = (event) => {
        const isChecked = event.target.checked;
        const newValue = !isChecked;
        setShowModalToday(newValue);
        localStorage.setItem('showModalToday', String(newValue));
    };

    const handleClose = () => {
        setShowModalToday(false);
        localStorage.setItem('showModalToday', 'false');
        onClose?.();
    };

    const handleOpen = () => {
        setShowModalToday(true);
        localStorage.setItem('showModalToday', 'true');
    };

    useEffect(() => {
        if (wordUpdated) {
            handleOpen();
            wordsStore.setWordUpdated(false);
        }
    }, [wordUpdated]);

    return (
        <Dialog
            open={showModalToday}
            onClose={handleClose}
            fullWidth
            maxWidth="xs"
            PaperProps={{
                sx: {
                    borderRadius: '10px',
                    padding: '20px',
                    textAlign: 'center',
                    position: 'relative'
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

            <DialogActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
                <Checkbox
                    label={`Don't show this again today`}
                    show={true}
                    onChange={handleModalCheck}
                    id={checkboxId}
                    checked={!showModalToday}
                />
            </DialogActions>
        </Dialog>
    )
}))