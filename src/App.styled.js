import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const AppContent = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

export const AppMain = styled.main`
    flex-grow: 1;
`

export const StyledContainer = styled(ToastContainer).attrs({
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})`
&&&.Toastify__toast-container {
    

  }
  .Toastify__toast {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`