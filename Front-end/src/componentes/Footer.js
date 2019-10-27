import React, { } from 'react';
import "./Footer.css";
import logo from "../img/Logo_P30.png";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="LogoFooter" alt="logo">
                <a href="/"><img src={logo}/></a>
            </div>
            <footer className="Foo">
                <a href="https://github.com/jcmonterrosas/Project-IngSoft2">GitHub</a>
                <a href="https://trello.com/b/iqyc9vN4"> Trello</a>
                <a href="https://mern.io/"> Tecnology Stack </a>
            </footer>
        </div>
    );
}