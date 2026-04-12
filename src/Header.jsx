import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = ({ setDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`Header ${darkMode ? "dark" : ""}`}>
      <a href="#top" className="Header__logoAndTitle" onClick={closeMenu}>
        <img src="./portfolio.svg" alt="Logo du portfolio" className="logo" />
        <div className="HeaderTitle">Alexandre THOUNY</div>
      </a>

      <nav className={`Header__menu ${menuOpen ? "show" : ""}`}>
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="Header__menu__item"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="Header__actions">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="changeMode"
          aria-label={darkMode ? "Activer le theme clair" : "Activer le theme sombre"}
        >
          <img
            src={darkMode ? "./sun.svg" : "./moon.svg"}
            alt="Theme icon"
            className="moon"
          />
        </button>

        <button
          className={`hamburger-menu ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Afficher ou masquer le menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  setDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Header;
