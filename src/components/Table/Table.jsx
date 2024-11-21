import { TableTitle, TableWrapper, StyledTable, TableData, TableHead, TableHeader, TableWordNumber, TableContent, TableActions, TableBody, LoadMoreButton } from "./Table.styled";
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { TableRow } from './TableRow';
import { Loader } from '../Loader/Loader'
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../store/words-store';

export const Table = observer(() => {

    const { words, loading } = wordsStore;

    const [visibleCount, setVisibleCount] = useState(10);

    const matches = useMediaQuery('(min-width:900px)');

    const loadMore = () => setVisibleCount(prevCount => prevCount + 10);

    return (
        <>
            <TableTitle>Word List</TableTitle>
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
                    {loading ? (
                        <TableData colSpan={matches ? 5 : 4}>
                            <Loader />
                        </TableData>
                    ) : (
                        <TableBody>
                            {words.slice().reverse().slice(0, visibleCount).map((word, index) => (
                                <TableRow
                                    key={word.id}
                                    word={word}
                                    index={index}
                                    matches={matches}
                                />))
                            }
                        </TableBody>
                    )}
                </StyledTable>
                {visibleCount < wordsStore.words.length && (
                    <LoadMoreButton type="button" onClick={loadMore}>
                        Load More
                    </LoadMoreButton>
                )}
            </TableWrapper>
        </>
    );
});