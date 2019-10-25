import React, { useState, useEffect } from 'react';
import "./Header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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
    }

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
                    <a href="/Login">Iniciar sesión</a>
                    <a href="/">Mis viajes</a>
                    <a href="/">Registrarse</a>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                🍔 {/*  &#9776; */}
            </button>
        </div>
    );
}


