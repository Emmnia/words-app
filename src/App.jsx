import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { AppContent, AppMain, StyledContainer } from './App.styled'
import { GlobalStyle } from "./styles/GlobalStyle"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContent>
        <Header />
        <AppMain>
          <Outlet />
        </AppMain>
        <Footer />
        <StyledContainer />
      </AppContent>
    </>
  );
}
