import useMediaQuery from '@mui/material/useMediaQuery';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import { LoadMoreButton, StyledTable, StyledTableRow, TableActions, TableBody, TableContent, TableData, TableHead, TableHeader, TableTitle, TableWordNumber, TableWrapper } from './Table.styled';
import { TableRow } from './TableRow';
import { wordsStore } from '../../store/words-store';
import { Loader } from '../Loader/Loader'

export const Table = observer(() => {

    const { words, loading } = wordsStore;

    const [visibleCount, setVisibleCount] = useState(10);

    const matches = useMediaQuery('(min-width:900px)');

    const theme = useTheme();

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
                    <TableBody>
                        {loading ? (
                            <StyledTableRow>
                                <TableData colSpan={matches ? 5 : 4}>
                                    <Loader />
                                </TableData>
                            </StyledTableRow>
                        ) : (words.slice().reverse().slice(0, visibleCount).map((word, index) => (
                            <TableRow
                                key={word.id}
                                word={word}
                                index={index}
                                matches={matches}
                            />))
                        )}
                    </TableBody>
                </StyledTable>
                {visibleCount < wordsStore.words.length && (
                    <LoadMoreButton type="button" onClick={loadMore} theme={theme}>
                        Load More
                    </LoadMoreButton>
                )}
            </TableWrapper>
        </>
    );
});