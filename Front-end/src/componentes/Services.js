import React, { Component } from "react";
import "./Services.css";
import { setInStorage, getFromStorage } from "../storage";
import axios from "axios";
import Popup from './PopupReserva'

var usr_id = getFromStorage("id");

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      confirmReserve: false
    }
  }

  consultarApi = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    };
    axios
      .post(
        `https://api-aventurate.herokuapp.com/reserva/additem/${usr_id}`,
        {
          hotel_o_servicio: false,
          ser_id: this.props.imagen._id,
          hot_id: "",
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
    let tipo;
    let contacto;
    if (this.props.imagen.categoria) {
      tipo = <h4>{this.props.imagen.categoria}</h4>;
    }
    if (this.props.imagen.telefono_contacto) {
      contacto = (
        <div>
          <h5>Contacto:</h5>
          <label>{this.props.imagen.telefono_contacto}</label>{" "}
        </div>
      );
    } else {
      contacto = null;
    }
  
    return (
      <div className="card container">
        <div className="contCard">
          <div className="colItems">
            {tipo}
            <div>
              <h5>Descripción: </h5>
              <label>{this.props.imagen.act_descripcion}</label>
            </div>
            <div>
              <h5>Ubicación: </h5>
              <label>
                {this.props.imagen.departamento ? this.props.imagen.departamento + " - " + this.props.imagen.ciudad : this.props.imagen.ciudad}
              </label>
              <br />
              <label>{this.props.imagen.direccion} </label>
            </div>
            {contacto}
            <div>
              <h5>Precio: </h5>
              <label>{"$ " + this.props.imagen.precio}</label>
            </div>
          </div>
          <div className="colPrices">
            <h2>{this.props.imagen.act_nombre}</h2>
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

export default Service;

