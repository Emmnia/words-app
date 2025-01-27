import useMediaQuery from '@mui/material/useMediaQuery';

import { HeaderBox, HeaderButton, HeaderLogo, HeaderLogoImage, HeaderLogoText, HeaderNav, HeaderNavItem, HeaderNavLink, HeaderNavList, StyledHeader } from './Header.styled';
import { HeaderBurger } from './HeaderBurger.jsx';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

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
