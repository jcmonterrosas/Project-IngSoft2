import React, { Component } from "react";
import "./Services.css";
import { setInStorage, getFromStorage } from "../storage";
import axios from "axios";
import Popup from './PopupReserva'

var usr_id = getFromStorage("id");

class Imagen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      // childs: 0,
      // adults: 0,
      // Dateinit: "2019-12-01T23:09:28.048+00:00",
      // DateFinish: "2019-12-05T23:09:28.048+00:00"
      confirmReserve: false
    }
  }

  consultarApi = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    };
    console.log(this.props.imagen._id)
    await axios
      .post(
        `https://api-aventurate.herokuapp.com/reserva/additem/${usr_id}`,
        {
          hotel_o_servicio: true,
          ser_id: "",
          hot_id: this.props.imagen._id,
          child_quantity: 1,
          adult_quantity: 1,
          DateBegin: "2019-12-01T23:09:28.048+00:00",
          DateEnd: "2019-12-05T23:09:28.048+00:00"
        },
        config
      )
      .then(response => {
        console.log("Done: ", response.data);
      })
      .catch(error => {
        console.log("this is error", error);
      });
  }

  handleClick = async e => {
    e.preventDefault();
    await this.consultarApi();
    this.setState({
      showPopup: !this.state.showPopup,
      confirmReserve: !this.state.confirmReserve
    });
    window.location.reload(true);
    // console.log(this.props.imagen._id)
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  quitReserve() {
    this.setState({
      confirmReserve: !this.state.confirmReserve
    });
  }

  render() {
    let contacto, acomodacion;
    let cantHabInd, cantHabDob, cantHabFam, cantHabMul;
    if (this.props.imagen.phone) {
      contacto = (
        <div>
          <h5>Contacto:</h5>
          <label>{this.props.imagen.phone}</label>
        </div>
      );
    } else {
      contacto = null;
    }
    if (this.props.imagen.hab_ind) {
      cantHabInd = <label>{"Individuales: " + this.props.imagen.hab_ind}</label>;
    }
    if (this.props.imagen.hab_dob) {
      cantHabDob = <label>{"Dobles: " + this.props.imagen.hab_dob}</label>;
    }
    if (this.props.imagen.hab_fam) {
      cantHabFam = <label>{"Familiares: " + this.props.imagen.hab_fam}</label>;
    }
    if (this.props.imagen.hab_mul) {
      cantHabMul = <label>{"Multiples: " + this.props.imagen.hab_mul}</label>;
    }
    if (this.props.imagen.acommodation) {
      acomodacion = (
        <div>
          <h5>Habitaciones disponibles:</h5>
          {cantHabInd}
          <br />
          {cantHabDob}
          <br />
          {cantHabFam}
          <br />
          {cantHabMul}
        </div>
      );
    }
    return (
      <div className="card container">
        <div className="contCard">
          <div className="colItems">
            <div>
              <h5>Ubicación: </h5>
              <label>
                {this.props.imagen.departamento ? this.props.imagen.departamento + " - " + this.props.imagen.ciudad : this.props.imagen.ciudad}
              </label>
              <br />
              <label>{this.props.imagen.address}</label>
            </div>
            {contacto}
            {acomodacion}
            <div>
              <h5>Precio: </h5>
              <label>{"$ " + this.props.imagen.price_per_person}</label>
            </div>
          </div>
          <div className="colPrices">
            <h2>{this.props.imagen.name}</h2>
            <img src={this.props.imagen.images}></img>
            <a
              target="_blank"
              className={this.state.confirmReserve ? "btn btn-lg btn-info btn-block" : "btn btn-lg btn-warning btn-block"}
              onClick={this.state.confirmReserve ? this.quitReserve.bind(this) : this.togglePopup.bind(this)}
            >
              {this.state.confirmReserve ? "Quitar de la reserva" : "Agregar a la reserva"}
            </a>
          </div>
        </div>
        {
          this.state.showPopup ?
            <Popup
              closePopup={this.togglePopup.bind(this)}
              confirmPopup={this.handleClick}
            />
            : null
        }
      </div>
    );
  }
}


export default Imagen;
