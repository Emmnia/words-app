import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { AppContent, AppMain, StyledContainer } from './App.styled'
import { GlobalStyle } from './styles/GlobalStyle'
import { Modal } from './components/Modal/Modal'
import { useCallback, useRef, useState, useEffect } from 'react'
import { Provider } from 'mobx-react';
import { wordsStore } from './store/words-store'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './styles/themes'

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

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

  const stores = { wordsStore };

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/assets/images/owl.png" />
        <title>Peaceful Owl</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={getTheme(isDarkMode)}>
        <CssBaseline />
        <GlobalStyle isDarkMode={isDarkMode} />
        <Provider {...stores}>
          <AppContent>
            <Header
              showModal={showModal}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
            />
            <Modal
              ref={modalRef}
              onClose={closeModal}
            />
            <AppMain>
              <Outlet />
            </AppMain>
            <Footer />
            <StyledContainer isDarkMode={isDarkMode} />
          </AppContent>
        </Provider>
      </ThemeProvider>
    </HelmetProvider >
  );
}