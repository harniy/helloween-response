import React from "react";
import navImg from "../assets/img/nav-img.png";


export default function NavMenu({ showMenu, setShowMenu}) {
  return (
    <div id="nav-menu" className={`nav__menu ${showMenu ? "show__menu" : ""}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#trick" className="nav__link">
            candy
          </a>
        </li>
        <li className="nav__item">
          <a href="#new" className="nav__link">
            New
          </a>
        </li>

        <a href="#" className="button button--ghost">
          Support
        </a>
      </ul>

      <div
        className="nav__close"
        id="nav-close"
        onClick={() => setShowMenu(!showMenu)}
      >
        <box-icon name="x" color="white"></box-icon>
      </div>

      <img className="nav__img" src={navImg} />
    </div>
  );
}
