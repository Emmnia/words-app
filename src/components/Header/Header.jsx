import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <a href="!#" className="header-logo">
            <img className="header-logo__image" src="assets/images/owl.png" alt="owl" />
            <span>Мирная сова</span>
          </a>
          <button className="sign-in">Вход и регистрация</button>
        </div>
      </div>
    </header>
  );
};
