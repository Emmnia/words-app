import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const AppContent = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

export const AppMain = styled.main`
    flex-grow: 1;
`

export const StyledContainer = styled(ToastContainer).attrs({
    position: 'bottom-right',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
})`

    .Toastify__toast-theme--light {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);
    }
`