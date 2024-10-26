import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider, Helmet } from "react-helmet-async"
import { AppContent, AppMain, StyledContainer } from './App.styled'
import { GlobalStyle } from "./styles/GlobalStyle"

export const App = () => {
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
        <Header />
        <AppMain>
          <Outlet />
        </AppMain>
        <Footer />
        <StyledContainer />
      </AppContent>
    </HelmetProvider>
  );
}
