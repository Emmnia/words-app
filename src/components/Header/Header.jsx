import { StyledHeader, HeaderBox, HeaderLogo, HeaderLogoImage, HeaderLogoText, HeaderButton, HeaderNav, HeaderNavList, HeaderNavItem, HeaderNavLink, styles } from './Header.styled'
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { stack as Menu } from 'react-burger-menu';

export const Header = ({ showModal }) => {

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
          </>) : (
            <Menu
              styles={styles}
              customCrossIcon={<FontAwesomeIcon icon={faXmark} />}
              customBurgerIcon={<FontAwesomeIcon icon={faBars} />}
              right>
              <HeaderNav>
                <HeaderNavList>
                  <HeaderNavItem><HeaderNavLink to="/" data-content="Words">Words</HeaderNavLink></HeaderNavItem>
                  <HeaderNavItem><HeaderNavLink to="game" data-content="Cards">Cards</HeaderNavLink></HeaderNavItem>
                </HeaderNavList>
              </HeaderNav>
              <HeaderButton type="button" onClick={showModal}>Word Of The Day</HeaderButton>
            </Menu>
          )}
        </HeaderBox>
      </StyledHeader>
    </>
  );
};
