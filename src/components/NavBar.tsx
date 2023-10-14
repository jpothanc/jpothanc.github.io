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
            <a href="#" className="logo">
              <img
                src="https://images.unsplash.com/photo-1570211776091-c19f426d37af?auto=format&fit=crop&w=70&q=100"
                alt="logo"
                className="logo"
              />
              <span className="logo__text">Jessish Pothancheri</span>
            </a>
            <span className="logo__text">
              Development Lead | Equities Front Office|Order
              Management|Investment Bank
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
