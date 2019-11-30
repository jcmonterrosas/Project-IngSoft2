import React, { Component } from "react";
import "./tarjeta-perfil.css";
import foto from '../img/Octocat.png';

class TPerfil extends Component {
    

    render() {
        return (
            <div className="TarjetaPerfil container">
                <div className="HeaderTarjeta row">
                    <div className="col">
                    <div className="ImagenPerfil ">
                        <img src={foto} width="100%" height="auto"/>
                    </div>
                    </div>
                    <div className="DatosPerfil col">
                        <p>Pepito Perez</p>
                        <p>Pepito@gmail.com</p>
                    </div>
                    <button className="col">sadsad</button>
                </div>
                
            </div>
        );
    }
}

export default TPerfil;
