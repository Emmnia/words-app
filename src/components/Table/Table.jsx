import { TableTitle, TableWrapper, StyledTable, TableHead, TableHeader, TableWordNumber, TableContent, TableActions, TableBody, LoadMoreButton } from "./Table.styled";
import { useState, useContext } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
// import { useLocalStorage } from "@uidotdev/usehooks";
import { TableRow } from './TableRow';
import { WordsContext } from '../../store/words-context'

export const Table = () => {

    const [visibleCount, setVisibleCount] = useState(10);
    const [editingIndex, setEditingIndex] = useState(null);

    const matches = useMediaQuery('(min-width:900px)');

    const { words, editedWord, editWordOnServer } = useContext(WordsContext);

    const handleSaveClick = () => {
        editWordOnServer(editedWord);
        setEditingIndex(null);
    };

    const handleEditClick = (index) => setEditingIndex(index);

    const handleCancelClick = () => setEditingIndex(null);

    const loadMore = () => setVisibleCount(prevCount => prevCount + 10);

    return (
        <>
            <TableTitle>Список слов</TableTitle>
            <TableWrapper>
                <StyledTable>
                    <TableHead>
                        <TableHeader>
                            <TableWordNumber></TableWordNumber>
                            {matches ? (
                                <>
                                    <TableContent>English</TableContent>
                                    <TableContent>Transcription</TableContent>
                                    <TableContent>Russian</TableContent>
                                </>
                            ) : (
                                <>
                                    <TableContent>English</TableContent>
                                    <TableContent>Russian</TableContent>
                                </>
                            )}
                            <TableActions></TableActions>
                        </TableHeader>
                    </TableHead>
                    <TableBody>
                        {words.slice(0, visibleCount).map((word, index) => (
                            <TableRow
                                key={word.id}
                                word={word}
                                index={index}
                                editingIndex={editingIndex}
                                onEditClick={handleEditClick}
                                onSaveClick={handleSaveClick}
                                onCancelClick={handleCancelClick}
                                matches={matches}
                            />
                        ))}
                    </TableBody>
                </StyledTable>
                {visibleCount < words.length && (
                    <LoadMoreButton type="button" onClick={loadMore}>
                        Загрузить еще
                    </LoadMoreButton>
                )}
            </TableWrapper>
        </>
    );
};