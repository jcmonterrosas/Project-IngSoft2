import React, { Component } from "react";
import "./Reservation.css";
import Reserve from "./cardReserve";
import axios from "axios";
import { setInStorage, getFromStorage } from "../../storage";

var usr_id = getFromStorage("id");

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      reserva: [],
      id_reserva: "",
      totalHoteles: 0,
      totalActividades: 0
    };
  }

  consultarApi = async () => {
    const res = await axios.get(
      `https://api-aventurate.herokuapp.com/reserva/shopingcart/${usr_id}`
    );
    this.setState({ resultados: res.data.Items });
    console.log(parseInt(this.state.resultados.length));
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
    alert("precio total: " + this.state.reserva.price_total);
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
      //counter += parseInt(res.price);
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
      //counter += parseInt(res.price);
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
    const { resultados } = this.state;
    return (
      <div className="Reservation">
        <div className="HotelsReserve">
          <h1>Hoteles</h1>
          <React.Fragment>{this.mostrarresultados()}</React.Fragment>
          {/* <Reserve info={resultados} /> */}
          <div className="total">
            {resultados ? "Total: $ " + this.totalHoteles(resultados) : null}
          </div>
        </div>

        <div className="ActivitiesReserve">
          <h1>Actividades</h1>
          <React.Fragment>{this.mostrarresultadosAct()}</React.Fragment>
          <div className="total">
            {resultados
              ? "Total: $ " + this.totalActividades(resultados)
              : null}
          </div>
        </div>

        <button className="btn btn-warning btn-lg btn-block">Cancelar</button>
        <button
          className="btn btn-warning btn-lg btn-block"
          onClick={this.handlePagar}
        >
          Pagar
        </button>
      </div>
    );
  }
}
