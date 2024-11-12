import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { HelmetProvider, Helmet } from "react-helmet-async"
import { AppContent, AppMain, StyledContainer } from './App.styled'
import { GlobalStyle } from "./styles/GlobalStyle"
import { Card } from './components/Card/Card'
import { Modal } from './components/Modal/Modal'
import { useEffect, useState, useCallback, useRef, useContext } from 'react'
import { useLocalStorage } from "@uidotdev/usehooks";
import { WordsContext, WordsContextProvider } from './store/words-context'
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

  const [showModalToday, setShowModalToday] = useLocalStorage('showModalToday', null);
  const [word, setWord] = useState(null);
  const [wordId, setWordId] = useLocalStorage('lastWordId', null);
  const [lastShownDate, setLastShownDate] = useLocalStorage('lastShownDate', null);
  const wordsFromContext = useContext(WordsContext) || [];
  const backupWords = words;

  const wordsToUse = wordsFromContext.length > 0 ? wordsFromContext : backupWords;

  useEffect(() => {

    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];

    if (!lastShownDate || lastShownDate !== currentDate) {
      const newWord = wordsToUse.sort(() => Math.random() - Math.random()).find(() => true);
      setWord(newWord);
      console.log("New word selected:", newWord);
      setWordId(newWord.id);
      setLastShownDate(currentDate);
      setShowModalToday(true);
    } else {
      const previousWord = wordsToUse.find(word => word.id === wordId);
      setWord(previousWord);
      console.log("Previous word selected:", previousWord);
    }
  }, [lastShownDate, setLastShownDate, setShowModalToday, setWordId, wordId, wordsToUse]);

  useEffect(() => {
    if (word && showModalToday) {
      showModal();
    }
  }, [word, showModalToday, showModal]);

  const handleModalCheck = (event) => {
    const isChecked = event.target.checked;
    setShowModalToday(!isChecked);
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
      <WordsContextProvider>
        <AppContent>
          <Header showModal={showModal} />
          <Modal
            ref={modalRef}
            onClose={closeModal}
            onChange={handleModalCheck}
            checked={!showModalToday}
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
                show={false}
              />
            )}
          </Modal>
          <AppMain>
            <Outlet />
          </AppMain>
          <Footer />
          <StyledContainer />
        </AppContent>
      </WordsContextProvider>
    </HelmetProvider>
  );
}