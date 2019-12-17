import React, { Component, useEffect } from "react";
import "./Reservation.css";
import axios from "axios";
import { setInStorage, getFromStorage } from "../../storage";

var hotel_id = getFromStorage("hotel_id");

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  consultarApi = async () => {
    const res = await axios.get(
      `https://api-aventurate.herokuapp.com/hotels/${hotel_id}`
    );
    this.setState({ resultados: res.data.hotel });
    console.log(this.state.resultados);
  };

  componentDidMount = async () => {
    await this.consultarApi();
    console.log(this.state.resultados);
  };

  render() {
    console.log(this.state.resultados);
    return (
      <div className="Reservation">
        <div className="HotelsReserve">
          <h1>Hoteles</h1>

          <div className="cardReserve">
            {this.state.resultados.name}
            <br />
            {this.state.resultados.ciudad}
            <br />
            {"$ " + this.state.resultados.price_per_person}
          </div>
          <div className="total">
            Total: {"$ " + this.state.resultados.price_per_person}
          </div>
        </div>

        <div className="ActivitiesReserve">
          <h1>Actividades</h1>

          <div className="cardReserve">
            PARQUES NATURALES <br />
            KAYAK <br />$ 100.000
          </div>
          <div className="cardReserve">
            EXCURSIONES <br />
            SENDERISMO <br />$ 50.000
          </div>
          <div className="cardReserve">
            DESCANSO <br />
            MUSEO DEL ORO <br />$ 20.000
          </div>
          <div className="total">Total: $ 170.000</div>
        </div>
        <button className="btn btn-warning btn-lg btn-block">Cancelar</button>
        <button className="btn btn-warning btn-lg btn-block">Pagar</button>
      </div>
    );
  }
}
