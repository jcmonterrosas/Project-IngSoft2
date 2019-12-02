import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { getFromStorage, setInStorage } from "../storage";
import axios from "axios";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const logout = () => {
    console.log("cerrar sesion");
    var token = getFromStorage("token");
    axios
      .get("https://api-aventurate.herokuapp.com/user/logout/" + token)
      .then(response => {
        setInStorage("nombre", "");
        setInStorage("id", "");
        setInStorage("rol", "");
        setInStorage("token", "");

        setInStorage("telefono", "");
        setInStorage("correo", "");
        setInStorage("tipo_doc", "");
        setInStorage("identificacion", "");

        document.location = "/";
      })
      .catch(err => {
        alert("Un error ocurrio, intenta nuevamente.");
      });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  var nombreUser = getFromStorage("nombre");
  var idUser = getFromStorage("id");
  var rolUser = getFromStorage("rol");
  var telefono = getFromStorage("telefono");
  var correo = getFromStorage("correo");
  var tipo_doc = getFromStorage("tipo_doc");
  var identificacion = getFromStorage("identificacion");

  var token = getFromStorage("token");

  if (token != null && token.length > 0) {
    return (
      <div className="Header">
        <div className="LogoHeader" alt="logo">
          <a href="/">Aventurate</a>
        </div>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <a href="/User">{nombreUser}</a>
            <a href="/ProviderActivities">Mis viajes</a>
            <button
              type="button"
              className="botonInicial1 btn btn-warning"
              onClick={logout}
            >
              Cerrar Sesión
            </button>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
          🍔 {/*  &#9776; */}
        </button>
      </div>
    );
  } else {
    return (
      <div className="Header">
        <div className="LogoHeader" alt="logo">
          <a href="/">Aventurate</a>
        </div>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <a href="/Login">Iniciar Sesión</a>
            <a href="/ProviderActivities">Mis viajes</a>
            <a href="/Register">Registrarse</a>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
          🍔 {/*  &#9776; */}
        </button>
      </div>
    );
  }
}
