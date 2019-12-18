import React, { Component } from "react";
import "./PerfilProveedor.css";
import hotel from "./img/hotel.png";
import actividad from "./img/actividad.png";
import reserva from "./img/reserva.png";
import dinero from "./img/dinero.png";
import { withRouter } from 'react-router-dom';
import { getFromStorage } from "./storage";

import TPerfil from "./componentes/tarjeta-perfil";

var rolUser = getFromStorage("rol");

//var token = getFromStorage("token");

var metodos = [["1234567890123456", "T.credito"], ["1234567890123456", "T.debito"]];
var Historial = [["Tangamandapio", "5 personas", "689.000"]];
var Hoteles = [["Hotel Pepito", "Melgar", "CR13 #12 10", "3145029875",
  "1 Individual", "3 Dobles", "2 Familiares"], ["Hotel Pepito", "Melgar", "CR13 #12 10", "3145029875",
  "1 Individual", "3 Dobles", "2 Familiares"]];
var Actividades = [["Rafting", "Melgar", "CR13 #12 10", "3145029875",
  "5 cupos restantes"]];
var Reservas = [["Hotel Pepito", "Juan Chico", "3214689521", "Familiar", "3 Personas"
  , "356.000"]];

var nombreT, numeroT, codigoT, fechaT;

if (rolUser === "Proveedor") {
  var isProv = true;
  var isCli = false;
} else {
  isProv = false;
  isCli = true;
}

class PerfilProveedor extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNavigateHotels = this.onNavigateHotels.bind(this);
    this.onNavigateActivities = this.onNavigateActivities.bind(this);
    this.onNavigateReturn = this.onNavigateReturn.bind(this);
  }

  onNavigateHotels() {
    this.props.history.push("/ProviderHotels");
  }

  onNavigateActivities() {
    this.props.history.push("/ProviderActivities");
  }

  onNavigateReturn() {
    this.props.history.push("/PerfilProveedor?#");
  }

  handleChange(event) {
    const target = event.target;
    switch (target.id) {
      case "Nombre":
        nombreT = target.value;
        break;
      case "Numero":
        numeroT = target.value;
        break;
      case "Codigo":
        codigoT = target.value;
        break;
      case "Fecha":
        fechaT = target.value;
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    var nuevo = [numeroT, "T.Credito", nombreT, codigoT, fechaT];
    metodos.push(nuevo);
  }

  render() {

    const listametodos = metodos.map((metodo) =>
      <li className="row">
        <div className="LogoMetodo">
          <img src={dinero} width="100%" height="auto" />
        </div>
        <p >&nbsp;&nbsp;{"*****" + metodo[0].substring(12, 16)}</p>
        <p className="tipoCobro">
          {metodo[1]}</p>
      </li>
    );

    const listahistorial = Historial.map((historia) =>
      <li>
        <p className="historiales">{historia[0]}</p>
        <p className="historiales">{historia[1]}</p>
        <p className="historiales">{historia[2]}</p>
      </li>
    );

    const listahoteles = Hoteles.map((Hotel) =>
      <li>
        <p>{Hotel[0]}</p>
        <p>{Hotel[1]}</p>
        <p>{Hotel[2]}</p>
        <p>{Hotel[3]}</p>
        <p>{Hotel[4]}</p>
        <p>{Hotel[5]}</p>
        <p>{Hotel[6]}</p>
      </li>
    );

    const listaactividades = Actividades.map((Actividad) =>
      <li>
        <p >{Actividad[0]}</p>
        <p >{Actividad[1]}</p>
        <p >{Actividad[2]}</p>
        <p >{Actividad[3]}</p>
        <p >{Actividad[4]}</p>
      </li>
    );

    const listareservas = Reservas.map((Reserva) =>
      <li>
        <p>{Reserva[0]}</p>
        <p>{Reserva[1]}</p>
        <p>{Reserva[2]}</p>
        <p>{Reserva[3]}</p>
        <p>{Reserva[4]}</p>
        <p>{Reserva[5]}</p>
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
                    <a href="#popupAgregarT">
                      <button type="button" className="AgregarB">
                        Agregar
                    </button>
                    </a>
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

                  <a href="#popupHoteles">
                    <img src={hotel} width="100%" height="auto" alt="Mis Hoteles" />

                  </a>
                </div>
              </div>
              <div className="titulos col">
                <p className="Josefin">
                  <strong>Mis Actividades</strong>
                </p>
                <div className="LogoS ">

                  <a href="#popupActividades">
                    <img src={actividad} width="100%" height="auto" alt="Mis Actividades" />

                  </a>
                </div>
              </div>
              <div className="titulos col">
                <p className="Josefin">
                  <strong>Reservas</strong>
                </p>
                <div className="LogoS ">

                  <a href="#popupReservas">
                    <img src={reserva} width="100%" height="auto" />
                  </a>
                </div>
              </div>
              <div id="popupHoteles" className="popupForm popup">
                <div id="popupBody">
                  <div className="popupHeader">
                    <h2>Mis Hoteles</h2>
                    <a id="cerrar" onClick={this.onNavigateReturn}>&times;</a>
                  </div>
                  <div class="popupContent">
                    <ul>{listahoteles}</ul>
                    <input
                      onClick={this.onNavigateHotels}
                      value="Agregar Hotel"
                      type="button"
                      className="btn btn-warning btn-lg btn-block"
                    />
                  </div>
                </div>
              </div>
              <div id="popupActividades" className="popupForm popup">
                <div id="popupBody">
                  <div className="popupHeader">
                    <h2>Mis Actividades</h2>
                    <a id="cerrar" onClick={this.onNavigateReturn}>&times;</a>
                  </div>
                  <div class="popupContent">
                    <ul>{listaactividades}</ul>
                    <input
                      onClick={this.onNavigateActivities}
                      value="Agregar Hotel"
                      type="button"
                      className="btn btn-warning btn-lg btn-block"
                    />
                  </div>
                </div>
              </div>
              <div id="popupReservas" className="popupForm popup">
                <div id="popupBody">
                  <div className="popupHeader">
                    <h2>Reservas</h2>
                    <a id="cerrar" onClick={this.onNavigateReturn}>&times;</a>
                  </div>
                  <div class="popupContent">
                    <ul>{listareservas}</ul>
                  </div>
                </div>
              </div>
              <div id="popupAgregarT" className="popupForm popup">
                <div id="popupBody">
                  <div className="popupHeader">
                    <h2>Métodos de cobro</h2>
                    <a id="cerrar" onClick={this.onNavigateReturn}>&times;</a>
                  </div>
                  <div class="agregarForm">
                    <form className="tarjetaForm" onSubmit={this.handleSubmit}>
                      <h5>Ingresa los datos de tu tarjeta</h5>
                      <label htmlFor="inp" className="inp">
                        <input
                          type="text"
                          id="Nombre"
                          placeholder="&nbsp;"
                          onChange={this.handleChange}
                          autoComplete="off"
                          required
                        />
                        <span className="label">Nombre</span>
                        <span className="border"></span>
                      </label>
                      <label htmlFor="inp" className="inp">
                        <input
                          type="number"
                          id="Numero"
                          placeholder="&nbsp;"
                          onChange={this.handleChange}
                          autoComplete="off"
                          min="1000000000000000"
                          max="9999999999999999"
                          required
                        />
                        <span className="label">Numero</span>
                        <span className="border"></span>
                      </label>
                      <label htmlFor="inp" className="inp">
                        <input
                          type="number"
                          id="Codigo"
                          placeholder="&nbsp;"
                          onChange={this.handleChange}
                          autoComplete="off"
                          required
                        />
                        <span className="label">Codigo seguridad</span>
                        <span className="border"></span>
                      </label>
                      <label htmlFor="inp" className="inp">
                        <input
                          type="date"
                          id="Fecha"
                          placeholder="&nbsp;"
                          onChange={this.handleChange}
                          required
                        />
                        <span className="label">Fecha de Vencimiento</span>
                        <span className="border"></span>
                      </label>
                      <div className="input-group">
                        <input type="reset" className="btn btn-warning btn-lg btn-block" />
                      </div>
                      <div className="input-group guardar">
                        <input href="#" type="submit" className="btn btn-warning btn-lg btn-block" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}


      </div>
    );
  }
}

export default withRouter(PerfilProveedor);