import React from "react";
import "../../Css/Navbar.css";
import "../../Css/Css Responsive/NavbarResponsive.css";
import BurgerSvg from "../../media/Burger logo.svg";
import CrossSvg from "../../media/cross.svg";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = ({
  switchAbout,
  setSwitchAbout,
  leftSide,
  setLeftSide,
  rightSide,
  setRightSide,
}) => {
  const competenceSide = () => {
    setSwitchAbout(false);
    setRightSide(true);
    console.log("competence true");
    setLeftSide(false);
  };

  const aboutSide = () => {
    setSwitchAbout(true);
    setLeftSide(true);
    console.log("about true");
    setRightSide(false);
  };

  const [menuBurgerOpen, setMenuBurgerOpen] = useState(false);

  const toggleMenu = () => {
    setMenuBurgerOpen((current) => !current);
  };

  useEffect(() => {
    if(menuBurgerOpen) { 
      document.body.style.overflow = "hidden"
      document.body.style.height = "100vh";
    }
    !menuBurgerOpen && (document.body.style.overflow = "unset");
  }, [menuBurgerOpen]);

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navbaLeftSide">
          <div className="navbaLeftSideText">
            <p className="navbarDimitri">Dimitri Fontenelle</p>
            <p className="navbarDev">Développeur web</p>
          </div>
        </div>
        <div
          className={
            menuBurgerOpen ? "navbarRightSide activeMenu" : "navbarRightSide"
          }
        >
          <a
            href="#aboutId"
            onClick={() => {
              aboutSide();
              toggleMenu();
            }}
          >
            À propos
          </a>
          <a
            href="#aboutId"
            onClick={() => {
              competenceSide();
              toggleMenu();
            }}
          >
            Compétences
          </a>
          <a href="#Projets" onClick={toggleMenu}>
            Projets
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
        <img
          className="burgerLogo"
          src={menuBurgerOpen ? CrossSvg : BurgerSvg}
          onClick={toggleMenu}
          alt="burger menu logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
