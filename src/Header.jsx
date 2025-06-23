import React from "react";
import { useEffect, useState } from "react";
import "./Header.scss";

const Header = ({ setDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div>
      <div className={`Header ${darkMode ? "dark" : ""}`}>
        <div className="Header__logoAndTitle">
          <img src="./portfolio.svg" alt="logo" className="logo" />
          <div className="HeaderTitle">Alexandre THOUNY</div>
        </div>
        <div className="Header__darkMode">
          <button onClick={() => setDarkMode(!darkMode)} className="changeMode">
            <img
              src={darkMode ? "./moon.svg" : "./sun.svg"}
              alt="moon"
              className="moon"
            />
          </button>
        </div>
        <div className={`Header__menu ${menuOpen ? "show" : ""}`}>
          <a
            href="#About"
            className="Header__menu__item Header__menu__item--active"
            onClick={closeMenu}
          >
            About Me
          </a>
          <a
            href="#Skills"
            className="Header__menu__item Header__menu__item--active"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="Header__menu__item Header__menu__item--active"
            onClick={closeMenu}
          >
            Projects
          </a>
        </div>
        <div
          className={`hamburger-menu ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Header;
