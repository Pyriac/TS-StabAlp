import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import Home from "../assets/images/Home.png";
import Drawing_Compass from "../assets/images/Drawing_Compass.png";
import Farm from "../assets/images/Farm.png";
import Letter from "../assets/images/Letter.png";
import Project_Management from "../assets/images/Project_Management.png";
import Home_white from "../assets/images/Home_white.png";
import Drawing_Compass_white from "../assets/images/Drawing_Compass_white.png";
import Farm_white from "../assets/images/Farm_white.png";
import Letter_white from "../assets/images/Letter_white.png";
import Project_Management_white from "../assets/images/Project_Management_white.png";
import "../assets/styles/navBar.css";

export default function NavBar() {
  const [menuState, setMenuState] = useState("menuNav");
  const [page, setPage] = useState("home");
  const handleMenuClick = () => {
    if (menuState === "menuNav") {
      setMenuState("menuNav-show");
    } else {
      setMenuState("menuNav");
    }
  };

  const handleLogoClick = () => {
    if (menuState === "menuNav-show") {
      setMenuState("menuNav");
    }
  };
  return (
    <>
      <header className="mobile">
        {" "}
        <Link className="logoLink" to={`/`} onClick={handleLogoClick}>
          <img
            className="logo"
            src={Logo}
            alt="Logo représentant deux toits de maisons stylisés en noir avec des fenêtres blanches, au-dessus d'une courbe bleue symbolisant une rivière"
          />
        </Link>
        {/* <Link to={`/`}>
        <div onClick={handleLogoClick} className="Titre-Stab">
          Stab&apos; Alp
        </div>
      </Link> */}
        <h3 className="Sous-titre-nav">
          Laurent Pineau - Conseiller bâtiment d&apos;élevage depuis 1996
        </h3>
        <nav>
          <div
            onClick={handleMenuClick}
            className={`burger ${menuState === "menuNav-show" ? "open" : ""}`}
          >
            <span />
            <span />
            <span />
          </div>
          <div
            className={menuState}
            style={{
              background: menuState === "menuNav-show" ? "#fff" : "none",
            }}
          >
            <Link to={`/prestations`} onClick={handleMenuClick}>
              <a>Prestations</a>
            </Link>
            <Link to={`/innovations`} onClick={handleMenuClick}>
              <a>Innovations</a>
            </Link>
            <Link to={`/realisations`} onClick={handleMenuClick}>
              <a>Réalisation</a>
            </Link>
            <Link to={`/contact`} onClick={handleMenuClick}>
              <a>Contact</a>
            </Link>
          </div>
        </nav>
      </header>
      <div className="desktop">
        {" "}
        <Link to={`/`} onClick={() => setPage("home")}>
          <div className="logo-wrapper">
            <img
              className="logo"
              src={Logo}
              alt="Logo représentant deux toits de maisons stylisés en noir avec des fenêtres blanches, au-dessus d'une courbe bleue symbolisant une rivière"
            />
          </div>
        </Link>
        <nav className="desktopNav">
          <div className={`desktopLink ${page === "home" ? "active" : ""}`}>
            <Link to="/" onClick={() => setPage("home")}>
              {page === "home" ? (
                <img src={Home_white} className="navLogo" alt="" />
              ) : (
                <img src={Home} className="navLogo" alt="" />
              )}
              Accueil
            </Link>
          </div>
          <div
            className={`desktopLink ${page === "prestations" ? "active" : ""}`}
          >
            <Link to="/prestations" onClick={() => setPage("prestations")}>
              {page === "prestations" ? (
                <img src={Drawing_Compass_white} className="navLogo" alt="" />
              ) : (
                <img src={Drawing_Compass} className="navLogo" alt="" />
              )}
              Prestations
            </Link>
          </div>
          <div
            className={`desktopLink ${page === "innovations" ? "active" : ""}`}
          >
            <Link to="/innovations" onClick={() => setPage("innovations")}>
              {page === "innovations" ? (
                <img
                  src={Project_Management_white}
                  className="navLogo"
                  alt=""
                />
              ) : (
                <img src={Project_Management} className="navLogo" alt="" />
              )}
              Innovations
            </Link>
          </div>
          <div
            className={`desktopLink ${page === "realisations" ? "active" : ""}`}
          >
            <Link to="/realisations" onClick={() => setPage("realisations")}>
              {page === "realisations" ? (
                <img src={Farm_white} className="navLogo" alt="" />
              ) : (
                <img src={Farm} className="navLogo" alt="" />
              )}
              Réalisation
            </Link>
          </div>
          <div className={`desktopLink ${page === "contact" ? "active" : ""}`}>
            <Link to="/contact" onClick={() => setPage("contact")}>
              {page === "contact" ? (
                <img src={Letter_white} className="navLogo" alt="" />
              ) : (
                <img src={Letter} className="navLogo" alt="" />
              )}
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
