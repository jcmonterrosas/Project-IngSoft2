import React, { Component } from "react";
import "./tarjeta-perfil.css";
import foto from '../img/Octocat.png';
import person from '../img/person.png';
import tel from '../img/tel.png';
import mail from '../img/mail.png'

class TPerfil extends Component {
    

    render() {
        return (
            <div className="TarjetaPerfil container">
                <div className="HeaderTarjeta row align-items-center">
                    <div className="col-3">
                    <div className="ImagenPerfil ">
                        <img src={foto} width="100%" height="auto"/>
                    </div>
                    </div>
                    <div className="DatosPerfil col">
                        <br></br>
                        <p className="Amerika">Pepito Perez</p>
                        <p className="Aller mail">Pepito@gmail.com &#10004;</p>
                    </div>
                    <div className="col align-self-center">
                    <button className="EditarB " type="button">Editar</button>
                    </div>
                </div>
                <div className="InfoTarjeta row align-items-center container">
                    <div className="row linea1">
                        <div className="col-6">
                            <div className="LogoInfo">
                            <img src={person} width="100%" height="auto"/>
                            </div>
                            <p className="Aller">DATOS PERSONALES</p>
                            <p className="Aller sub">Pepito Perez</p>
                        </div>
                        <div className="col-6">
                            <div className="LogoInfo">
                            <img src={mail} width="100%" height="auto"/>
                            </div>
                            <p className="Aller">EMAIL</p>
                            <p className="Aller sub">Pepito@gmail.com</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="LogoInfo">
                            <img src={tel} width="100%" height="auto"/>
                            </div>
                            <p className="Aller">TELEFONOS</p>
                            <p className="Aller sub">+57 314 568 9878</p>
                        </div>
                        <div className="col"></div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default TPerfil;
