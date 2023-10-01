//import React from 'react'

import { useState } from "react";

const NavBar = () => {
  const [navStyle, setNavStyle] = useState("nav");
  const [hamStyle, setHamStyle] = useState("hamburger");
  //   const [styles, setStyles] = useState({
  //     navStyle: "",
  //     hamStyle: "",
  //   });

  const handleHamburger = (event: React.MouseEvent<HTMLDivElement>) => {
    const divIdentifier = event.currentTarget.getAttribute("data-identifier");
    console.log(divIdentifier);
    var style = navStyle === "nav" ? "nav--open" : "nav";
    setNavStyle(style);

    style = hamStyle === "hamburger" ? "hamburger--open" : "hamburger";
    setHamStyle(style);
  };

  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="top-bar__content">
            <section className="phone">
              <i className="fa fa-phone icon" aria-hidden="true"></i>
              1-800922-04444
            </section>
            <section className="email">
              <i className="fa fa-envelope icon" aria-hidden="true"></i>
              kaljessy@gmail.com
            </section>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar__content">
            <a href="#" className="logo">
              <img src="../public/vite.svg" alt="logo" className="logo__img" />
              <span className="logo__text">Jessish Pothancheri</span>
            </a>
            <nav className={navStyle} data-identifier="navStyle">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Solutions
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Projects
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="btn">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div
              className={hamStyle}
              data-identifier="hamStyle"
              onClick={(e) => handleHamburger(e)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
