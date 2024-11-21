import { StyledHeader, HeaderBox, HeaderLogo, HeaderLogoImage, HeaderLogoText, HeaderButton, HeaderNav, HeaderNavList, HeaderNavItem, HeaderNavLink } from './Header.styled'

export const Header = ({ showModal }) => {

  return (
    <>
      <StyledHeader className="header">
        <div className="container">
          <HeaderBox>
            <HeaderLogo to='/'>
              <HeaderLogoImage src="assets/images/owl.png" />
              <HeaderLogoText>Peaceful Owl</HeaderLogoText>
            </HeaderLogo>
            <HeaderButton type="button" onClick={showModal}>Word Of The Day</HeaderButton>
            <HeaderNav>
              <HeaderNavList>
                <HeaderNavItem><HeaderNavLink to="/" data-content="Words">Words</HeaderNavLink></HeaderNavItem>
                <HeaderNavItem><HeaderNavLink to="game" data-content="Cards">Cards</HeaderNavLink></HeaderNavItem>
              </HeaderNavList>
            </HeaderNav>
          </HeaderBox>
        </div>
      </StyledHeader>
    </>
  );
};
