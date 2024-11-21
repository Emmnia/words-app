import { StyledHeader, HeaderBox, HeaderLogo, HeaderLogoImage, HeaderLogoText, HeaderButton, HeaderNav, HeaderNavList, HeaderNavItem, HeaderNavLink } from './Header.styled'

export const Header = ({ showModal }) => {

  return (
    <>
      <StyledHeader className="header">
        <div className="container">
          <HeaderBox>
            <HeaderLogo to='/'>
              <HeaderLogoImage src="assets/images/owl.png" />
              <HeaderLogoText>Мирная сова</HeaderLogoText>
            </HeaderLogo>
            <HeaderButton type="button" onClick={showModal}>Слово дня</HeaderButton>
            <HeaderNav>
              <HeaderNavList>
                <HeaderNavItem><HeaderNavLink to="/" data-content="Слова">Слова</HeaderNavLink></HeaderNavItem>
                <HeaderNavItem><HeaderNavLink to="game" data-content="Тренажер">Тренажер</HeaderNavLink></HeaderNavItem>
              </HeaderNavList>
            </HeaderNav>
          </HeaderBox>
        </div>
      </StyledHeader>
    </>
  );
};
