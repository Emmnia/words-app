import { ModalWrapper, ModalHeader, ModalFooter, ModalButton, ModalButtonIcon } from './Modal.styled'
import { Checkbox } from '../Checkbox/Checkbox';
import { forwardRef, useEffect } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from "@uidotdev/usehooks";
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader'
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../store/words-store';

export const Modal = observer(forwardRef(function Modal({ onClose }, ref) {
    const checkboxId = uuidv4();

    const { word, loading, wordUpdated } = wordsStore;

    const [showModalToday, setShowModalToday] = useLocalStorage('showModalToday', null);

    const handleModalCheck = (event) => {
        const isChecked = event.target.checked;
        setShowModalToday(!isChecked);
    };

    useEffect(() => {
        if (showModalToday && ref.current) {
            ref.current.showModal();
        }
    }, [ref, showModalToday]);

    useEffect(() => {
        console.log('wordUpdated:', wordUpdated);
        console.log('word:', word);
        if (wordUpdated) {
            setShowModalToday(true);
            wordsStore.setWordUpdated(false);
        }
    }, [setShowModalToday, wordUpdated, word]);

    return (
        <ModalWrapper ref={ref}>
            <ModalHeader>
                <ModalButton onClick={onClose}><ModalButtonIcon icon={faXmark} /></ModalButton>
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
                    visible={true}
                    show={false}
                />
            ))
            }
            <ModalFooter>
                <Checkbox
                    label={'Больше не показывать сегодня'}
                    show={true}
                    onChange={handleModalCheck}
                    id={checkboxId}
                    checked={!showModalToday}
                />
            </ModalFooter>
        </ModalWrapper>
    )
}))