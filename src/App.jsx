import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { HelmetProvider, Helmet } from "react-helmet-async"
import { AppContent, AppMain, StyledContainer } from './App.styled'
import { GlobalStyle } from "./styles/GlobalStyle"
import { Card } from './components/Card/Card'
import { Modal } from './components/Modal/Modal'
import { useEffect, useState, useCallback, useRef } from 'react'
import words from './words.json'

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

  const [word, setWord] = useState(null);
  const [showModalToday, setShowModalToday] = useState(true);

  useEffect(() => {
    const hideModalToday = localStorage.getItem('hideModalToday');
    if (hideModalToday) {
      setShowModalToday(hideModalToday === 'true');
    }

    const now = new Date();
    const lastShownDate = localStorage.getItem('lastShownDate');
    const lastWordId = localStorage.getItem('lastWordId');

    if (!lastShownDate || new Date(lastShownDate) < new Date(now - 24 * 60 * 60 * 1000)) {

      const newWord = words.sort(() => Math.random() - Math.random()).find(() => true);
      setWord(newWord);
      console.log("New word selected:", newWord);

      localStorage.setItem('lastWordId', newWord.id);
      localStorage.setItem('lastShownDate', now.toISOString());
    } else {

      const previousWord = words.find(word => word.id === lastWordId);
      setWord(previousWord);
      console.log("Previous word selected:", previousWord);
    }
  }, []);

  useEffect(() => {
    if (word && showModalToday) {
      showModal();
    }
  }, [word, showModalToday, showModal]);

  const handleCheck = (event) => {
    const isChecked = event.target.checked;
    setShowModalToday(!isChecked);
    localStorage.setItem('hideModalToday', !isChecked);
  };

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
      <AppContent>
        <Header showModal={showModal} />
        <Modal
          ref={modalRef}
          onClose={closeModal}
          onCheck={handleCheck}
          showModalToday={showModalToday}
        >
          {word && (
            <Card
              key={word.id}
              id={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tags={word.tags}
              boolean={word.boolean}
              visible={true}
            />
          )}
        </Modal>
        <AppMain>
          <Outlet />
        </AppMain>
        <Footer />
        <StyledContainer />
      </AppContent>
    </HelmetProvider>
  );
}



// для модального окна: стилизовать его, кнопки открытия и закрытия; анимация ? затемнение посильнее ?

//   для галереи: разобраться с анимацией колоды карт, сделать на карточках чекбокс "выучено", в галерее добавить вариант "не показывать выученные"