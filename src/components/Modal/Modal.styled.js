import { keyframes } from '@emotion/react';
import { Box, IconButton, Modal as MuiModal } from '@mui/material';
import { styled } from '@mui/material/styles';

const open = keyframes`
    from { opacity: 0 }
    to   { opacity: 1 }
`
export const StyledModal = styled(MuiModal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    animation: `${open} 1s forwards`,
});

export const ModalContent = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    padding: '20px',
    position: 'relative',
    textAlign: 'center',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflow: 'auto',
    willChange: 'transform'
}));

export const ModalHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '16px',
});

export const ModalFooter = styled(Box)({
    marginTop: '16px',
});

export const ModalButton = styled(IconButton)({
    color: '#E55D87',
})