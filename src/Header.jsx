import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <div className="Header__logoAndTitle">
          <img src="./portfolio.svg" alt="logo" className="logo" />
          <div className="HeaderTitle">Alexandre THOUNY</div>
        </div>
        <div className="Header__menu">
          <a
            href="#About"
            className="Header__menu__item Header__menu__item--active"
          >
            About Me
          </a>
          <a
            href="#Skills"
            className="Header__menu__item Header__menu__item--active"
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="Header__menu__item Header__menu__item--active"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="Header__menu__item Header__menu__item--active"
          >
            Contact
          </a>
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
