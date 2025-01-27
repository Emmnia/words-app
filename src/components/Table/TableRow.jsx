import { observer } from 'mobx-react-lite';
import { useRef, useState } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { StyledTableRow, TableControlsButton, TableData, TableDataWrapper } from './Table.styled'
import { TableEditForm } from './TableEditForm';
import { TableWarning } from './TableWarning';
import { wordsStore } from '../../store/words-store';

export const TableRow = observer(({ word, index, matches }) => {

    const { words, deleteWordFromServer } = wordsStore;

    const [editingIndex, setEditingIndex] = useState(null);

    const WarningRef = useRef();

    const isEditing = editingIndex === index;

    const handleEditClick = (index) => setEditingIndex(index);
    const handleCancelClick = () => setEditingIndex(null);
    const handleSaveClick = () => setEditingIndex(null);

    const handleDeleteClick = async () => {
        try {
            const wordToDelete = words.find(w => w.id === word.id)
            if (wordToDelete) {
                await deleteWordFromServer(wordToDelete);
            } else {
                throw new Error('Слово не найдено для удаления');
            }
        } catch (error) {
            toast.error('Error deleting word. Try again');
            console.error(error);
        }
    }

    const showPopover = () => {
        if (WarningRef.current) {
            WarningRef.current.showPopover()
        }
    }

    const hidePopover = () => {
        if (WarningRef.current) {
            WarningRef.current.hidePopover()
        }
    }

    return (
        <StyledTableRow>
            <TableData>{index + 1}</TableData>
            {isEditing ? (
                <TableEditForm
                    word={word}
                    onCancelClick={handleCancelClick}
                    onSaveClick={handleSaveClick}
                    matches={matches}
                />
            ) : (
                <>
                    {matches ? (
                        <>
                            <TableData>{word.english}</TableData>
                            <TableData>{word.transcription}</TableData>
                        </>
                    ) : (
                        <>
                            <TableData>
                                <TableDataWrapper>{word.english}</TableDataWrapper>
                                <TableDataWrapper>{word.transcription}</TableDataWrapper>
                            </TableData>
                        </>
                    )}
                    <TableData>{word.russian}</TableData>
                    <TableData>
                        <TableControlsButton type="button" onClick={() => handleEditClick(index)}>
                            <FaPencilAlt />
                        </TableControlsButton>
                        <TableControlsButton
                            type="button"
                            onClick={showPopover}
                        >
                            <FaTrashAlt />
                        </TableControlsButton>
                        <TableWarning
                            ref={WarningRef}
                            onClick={() => {
                                handleDeleteClick(word);
                                hidePopover();
                            }} />
                    </TableData>
                </>
            )}
        </StyledTableRow>
    );
});