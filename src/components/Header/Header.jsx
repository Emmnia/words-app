import { NavLink } from "react-router-dom"
import "./Header.css"
import { StyledHeader, HeaderBox, HeaderLogo } from './Header.styled'

export const Header = ({ isActive, showModal }) => {

  return (
    <>
      <StyledHeader className="header">
        <div className="container">
          <HeaderBox>
            <HeaderLogo to='/'>
              <img className="header-logo__image" src="assets/images/owl.png" />
              <span>Мирная сова</span>
            </HeaderLogo>
            <button type="button" onClick={showModal}>Слово дня</button>
            <nav>
              <ul className="header__nav">
                <li><NavLink to="/" className={"header__link " + (isActive ? "active" : "")}>Список слов</NavLink></li>
                <li><NavLink to="game" className={"header__link " + (isActive ? "active" : "")}>Тренажер</NavLink></li>
              </ul>
            </nav>
          </HeaderBox>
        </div>
      </StyledHeader>
    </>
  );
};
