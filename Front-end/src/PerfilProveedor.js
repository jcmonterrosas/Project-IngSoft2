import React, { Component } from "react";
import "./PerfilProveedor.css";
import hotel from "./img/hotel.png";
import actividad from "./img/actividad.png";
import reserva from "./img/reserva.png";
import dinero from "./img/dinero.png";

import { getFromStorage, setInStorage } from "./storage";

import TPerfil from "./componentes/tarjeta-perfil";

var rolUser = getFromStorage("rol");

var token = getFromStorage("token");

if (rolUser === "Proveedor") {
  var isProv = true;
} else isProv = false;

export default class PerfilProveedor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      metodos:[["1234567890123456","T.credito"],["1234567890123456","T.debito"]],
      Historial: [["Tangamandapio","5 personas","689.000"]]
    };

    //this.agregar = this.agregar.bind(this);
    //this.vermas = this.vermas.bind(this);
  }

  render() {

    const listametodos = this.state.metodos.map((metodo) =>
      <li className="row">
          <div className="LogoMetodo">
            <img src={dinero} width="100%" height="auto" />
          </div>
          <p >&nbsp;&nbsp;{"*****"+metodo[0].substring(12,16)}</p>
          <p className="tipoCobro">
            {metodo[1]}</p>
      </li>
    );

    const listahistorial = this.state.Historial.map((historia) =>
      <li>
        <p className="historiales">{historia[0]}</p>
        <p className="historiales">{historia[1]}</p>
        <p className="historiales">{historia[2]}</p>
      </li>
    );

    return (
      <div className="PerfilProveedor container">
        <TPerfil className="row" />
        <div className="tarjetaIFinanciera row ">
          <div className="tituloTarjeta Amerika row align-items-center">
            <p>Información Financiera</p>
          </div>
          <div className="row bodyIFinanciera">
            <div className="titulos col">
              <p className="Josefin">
                <strong>Métodos de cobro</strong>
              </p>
              <div className="InfoFinanciera">
                <div className="Cobro col">       
                  <ul>
                    {listametodos}
                  </ul>
                  <div className="botonA">
                    <button type="button" className="AgregarB">
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="titulos col ">
              <p className="Josefin">
                <strong>Historial</strong>
              </p>
              <div className="InfoFinanciera">
                <div className="Historial row">
                  <div className="col">
                    <ul>{listahistorial}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isProv && (
          <div className="tarjetaServicios row align-items-center">
            <div className="tituloTarjeta Amerika row align-items-center">
              <p>Servicios</p>
            </div>
            <div className="row bodyServicios">
              <div className="titulos col">
                <p className="Josefin">
                  <strong>Mis Hoteles</strong>
                </p>
                <div className="LogoS ">
                  <a href="/ProviderHotels">
                    <img src={hotel} width="100%" height="auto" />
                  </a>
                </div>
              </div>
              <div className="titulos col">
                <p className="Josefin">
                  <strong>Mis Actividades</strong>
                </p>
                <div className="LogoS ">
                  <a href="/ProviderActivities">
                    <img src={actividad} width="100%" height="auto" />
                  </a>
                </div>
              </div>
              <div className="titulos col">
                <p className="Josefin">
                  <strong>Reservas</strong>
                </p>
                <div className="LogoS ">
                  <img src={reserva} width="100%" height="auto" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
