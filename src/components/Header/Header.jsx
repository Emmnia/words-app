import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = ({ isActive }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <NavLink to='/' className="header-logo">
            <img className="header-logo__image" src="assets/images/owl.png" />
            <span>Мирная сова</span>
          </NavLink>
          <nav>
            <ul className="header__nav">
              <li><NavLink to="/" className={"header__link " + (isActive ? "active" : "")}>Список слов</NavLink></li>
              <li><NavLink to="/game" className={"header__link " + (isActive ? "active" : "")}>Тренажер</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
