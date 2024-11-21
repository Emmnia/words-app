import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { HelmetProvider, Helmet } from "react-helmet-async"
import { AppContent, AppMain, StyledContainer } from './App.styled'
import { GlobalStyle } from "./styles/GlobalStyle"
import { Modal } from './components/Modal/Modal'
import { useCallback, useRef } from 'react'
import { Provider } from 'mobx-react';
import { wordsStore } from './store/words-store'

export const App = () => {

  const modalRef = useRef(null);

  const showModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/assets/images/owl.png" />
        <title>Peaceful Owl</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <Provider {...wordsStore}>
        <AppContent>
          <Header
            showModal={showModal}
          />
          <Modal
            ref={modalRef}
            onClose={closeModal}
          />
          <AppMain>
            <Outlet />
          </AppMain>
          <Footer />
          <StyledContainer />
        </AppContent>
      </Provider>
    </HelmetProvider>
  );
}