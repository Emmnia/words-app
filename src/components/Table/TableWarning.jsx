import { forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TableWarningButton, TableWarningButtonText, TableWarningText, TableWarningWrapper } from './Table.styled'

export const TableWarning = forwardRef(function TableWarning({ onClick }, ref) {
    const PopoverId = uuidv4();

    return (
        <TableWarningWrapper id={PopoverId} popover="manual" ref={ref}>
            <TableWarningText>Word will be deleted permanently. Continue?</TableWarningText>
            <TableWarningButton popovertarget={PopoverId} popovertargetaction="hide">
                <TableWarningButtonText>Cancel</TableWarningButtonText>
            </TableWarningButton>
            <TableWarningButton type="button" onClick={onClick}>
                <TableWarningButtonText>Ok</TableWarningButtonText>
            </TableWarningButton>
        </TableWarningWrapper>
    )
})
