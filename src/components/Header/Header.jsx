import { StyledHeader, HeaderBox, HeaderLogo, HeaderLogoImage, HeaderLogoText, HeaderButton, HeaderNav, HeaderNavList, HeaderNavItem, HeaderNavLink } from './Header.styled';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HeaderBurger } from './HeaderBurger.jsx';

export const Header = ({ showModal, isDarkMode, toggleTheme }) => {

  const matches = useMediaQuery('(min-width:900px)');

  return (
    <>
      <StyledHeader>
        <HeaderBox>
          <HeaderLogo to='/'>
            <HeaderLogoImage src="assets/images/owl.png" />
            <HeaderLogoText>Peaceful Owl</HeaderLogoText>
          </HeaderLogo>
          {matches ? (<>
            <HeaderButton type="button" onClick={showModal}>Word Of The Day</HeaderButton>
            <HeaderNav>
              <HeaderNavList>
                <HeaderNavItem><HeaderNavLink to="/" data-content="Words">Words</HeaderNavLink></HeaderNavItem>
                <HeaderNavItem><HeaderNavLink to="game" data-content="Cards">Cards</HeaderNavLink></HeaderNavItem>
              </HeaderNavList>
            </HeaderNav>
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
          </>) : (
            <HeaderBurger onClick={showModal} isDarkMode={isDarkMode} onToggle={toggleTheme} />
          )}
        </HeaderBox>
      </StyledHeader>
    </>
  );
};
