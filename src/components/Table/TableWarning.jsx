import { forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TableWarningWrapper, TableWarningText, TableWarningButton, TableWarningButtonText } from './Table.styled'

export const TableWarning = forwardRef(function TableWarning({ onClick }, ref) {
    const PopoverId = uuidv4();

    return (
        <TableWarningWrapper id={PopoverId} popover="manual" ref={ref}>
            <TableWarningText>Слово удалится безвозвратно. Продолжить?</TableWarningText>
            <TableWarningButton popovertarget={PopoverId} popovertargetaction="hide">
                <TableWarningButtonText>Отмена</TableWarningButtonText>
            </TableWarningButton>
            <TableWarningButton type="button" onClick={onClick}>
                <TableWarningButtonText>Ок</TableWarningButtonText>
            </TableWarningButton>
        </TableWarningWrapper>
    )
})
