import { useState, useContext } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { TableEditForm } from './TableEditForm';
import { WordsContext } from '../../store/words-context';
import { toast } from 'react-toastify';
import { StyledTableRow, TableData, TableDataWrapper, TableControlsButton } from './Table.styled'

export const TableRow = ({ word, index, matches }) => {

    const { words, deleteWordFromServer } = useContext(WordsContext);

    const [editingIndex, setEditingIndex] = useState(null);

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
            toast.error('Ошибка при удалении. Попробуйте еще раз');
            console.error(error);
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
                        <TableControlsButton type="button" onClick={handleDeleteClick}>
                            <FaTrashAlt />
                        </TableControlsButton>
                    </TableData>
                </>
            )}
        </StyledTableRow>
    );
};