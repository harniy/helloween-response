import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import "boxicons";
import NavMenu from "./NavMenu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false)

  const changeHeaderColor = () => {
    if(window.scrollY > 50) {
      setHeaderScroll(true)
    } else {
      setHeaderScroll(false)
    }
  }

  useEffect(() => {
    window.onscroll = () => {
      changeHeaderColor()
    }
  }, [])

  return (
    <header className={`header ${headerScroll ? 'header__scroll' : ''}`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={logo} alt="" className="nav__logo-img" />
          Halloween
        </a>

            <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />

        <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
          <box-icon name="grid-alt" color="white"></box-icon>
        </div>
      </nav>
    </header>
  );
}
