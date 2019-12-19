import React, { Component } from "react";
import "./Reservation.css";
import Reserve from "./cardReserve";
import axios from "axios";
import { setInStorage, getFromStorage } from "../../storage";
import Popup from './PopupPago';

var usr_id = getFromStorage("id");

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      reserva: [],
      id_reserva: "",
      showPopup: false,
      totalHotels: 0,
      totalActivities: 0
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  consultarApi = async () => {
    const res = await axios.get(
      `https://api-aventurate.herokuapp.com/reserva/shopingcart/${usr_id}`
    );
    this.setState({ resultados: res.data.Items });
    console.log(this.state.resultados);
  };

  consultarApiReservar = async () => {
    await axios
      .post(`https://api-aventurate.herokuapp.com/reserva/${usr_id}`, {
        name: "default"
      })
      .then(response => {
        this.setState({ id_reserva: response.data.Reserva._id });
        console.log(this.state.id_reserva);
        console.log("Done: ", response.data);
      })
      .catch(error => {
        console.log("this is error", error);
      });
  };

  consultarApiGetReserva = async () => {
    const res = await axios.get(
      `https://api-aventurate.herokuapp.com/reserva/getreserva/${this.state.id_reserva}`
    );
    this.setState({ reserva: res.data.Reserva });
    console.log(this.state.reserva);
  };

  handlePagar = async e => {
    e.preventDefault();
    await this.consultarApiReservar();
    await this.consultarApiGetReserva();
    this.setState({
      showPopup: !this.state.showPopup
    });
    // alert("precio total: " + this.state.reserva.price_total);
    window.location.reload(true);
  };

  componentDidMount = async () => {
    await this.consultarApi();
    // console.log(this.state.resultados);
  };

  totalHoteles = res => {
    let counter = 0;
    if (res) {
      this.state.resultados.map(resultado => {
        if (resultado.hotel_o_servicio) {
          counter += parseInt(resultado.price);
        }
      });
    }
    return counter;
  };

  totalActividades = res => {
    let counter = 0;
    if (res) {
      this.state.resultados.map(resultado => {
        if (!resultado.hotel_o_servicio) {
          counter += parseInt(resultado.price);
        }
      });
    }
    return counter;
  };

  mostrarresultados = () => {
    return (
      <React.Fragment>
        {this.state.resultados.map(
          resultado =>
            resultado.hotel_o_servicio && (
              <Reserve key={resultado._id} info={resultado}></Reserve>
            )
        )}
      </React.Fragment>
    );
  };

  mostrarresultadosAct = () => {
    return (
      <React.Fragment>
        {this.state.resultados.map(
          resultado =>
            !resultado.hotel_o_servicio && (
              <Reserve key={resultado._id} info={resultado}></Reserve>
            )
        )}
      </React.Fragment>
    );
  };

  render() {
    let totalCost = 0
    const { resultados } = this.state;
    this.state.totalHotels = this.totalHoteles(resultados)
    this.state.totalActivities = this.totalActividades(resultados)
    totalCost = this.state.totalHotels + this.state.totalActivities
    return (
      <div className="Reservation">
        <div className="HotelsReserve">
          <h1>Hoteles</h1>
          <React.Fragment>{this.mostrarresultados()}</React.Fragment>
          <div className="total">
            {resultados ? "Total: $ " + this.state.totalHotels : null}
          </div>
        </div>

        <div className="ActivitiesReserve">
          <h1>Actividades</h1>
          <React.Fragment>{this.mostrarresultadosAct()}</React.Fragment>
          <div className="total">
            {resultados
              ? "Total: $ " + this.state.totalActivities
              : null}
          </div>
        </div>

        <button className="btn btn-warning btn-lg btn-block">Cancelar</button>
        <button
          className="btn btn-warning btn-lg btn-block"
          onClick={this.togglePopup.bind(this)}
        >
          Pagar
        </button>
        {this.state.showPopup ? 
          <Popup
            total={totalCost} 
            hotels={this.state.totalHotels}
            activities={this.state.totalActivities}
            closePopup={this.togglePopup.bind(this)}
            confirmPopup={this.handlePagar}
          />
          : null
        }
      </div>
    );
  }
}
