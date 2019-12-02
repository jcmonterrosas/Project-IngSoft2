import React, {Component} from "react";
import "./PerfilProveedor.css";
import hotel from './img/hotel.png';
import actividad from './img/actividad.png';
import reserva from './img/reserva.png'

import TPerfil from "./componentes/tarjeta-perfil";


export default class PerfilProveedor extends Component {

  render() {
    return (
      <div className="PerfilProveedor container">
          <TPerfil className="row"/>
          <div className="tarjetaIFinanciera row ">
            <div className="tituloTarjeta Amerika row align-items-center">
              <p>Información Financiera</p>
            </div>
            <div className="row bodyIFinanciera">
              <div className="titulos col">
                <p className="Josefin"><strong>Métodos de cobro</strong></p>
                <div className="InfoFinanciera">

                </div>
              </div>
              <div className="titulos col ">
                <p className="Josefin"><strong>Historial</strong></p>
                <div className="InfoFinanciera">

                </div>
              </div>
            </div>
          </div>
          <div className="tarjetaServicios row align-items-center">
            <div className="tituloTarjeta Amerika row align-items-center">
              <p>Servicios</p>
            </div>
            <div className="row bodyServicios">
            <div className="titulos col">
              <p className="Josefin"><strong>Mis Hoteles</strong></p>
              <div className="LogoS ">
                <img src={hotel} width="100%" height="auto"/>
              </div>
            </div>
            <div className="titulos col">
              <p className="Josefin"><strong>Mis Actividades</strong></p>
              <div className="LogoS ">
                <a href="/ProviderActivities"><img src={actividad} width="100%" height="auto"/></a>
              </div>
            </div>
            <div className="titulos col">
              <p className="Josefin"><strong>Reservas</strong></p>
              <div className="LogoS ">
                <img  src={reserva} width="100%" height="auto"/>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

