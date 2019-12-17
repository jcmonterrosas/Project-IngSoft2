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
          <div className={this.state.resultados.name ? "cardReserve" : ""}>
            {this.state.resultados.name}
            <br />
            {this.state.resultados.ciudad}
            <br />
            {this.state.resultados.price_per_person ? "$ " + this.state.resultados.price_per_person : null}
          </div>
          <div className="total">
            {this.state.resultados.price_per_person ? "Total: $ " + this.state.resultados.price_per_person : null}
          </div>
        </div>

        <div className="ActivitiesReserve">
          <h1>Actividades</h1>
          <div className="cardReserve">
            PARQUES NATURALES <br />
            KAYAK <br />$ 100000
          </div>
          <div className="cardReserve">
            EXCURSIONES <br />
            SENDERISMO <br />$ 50000
          </div>
          <div className="cardReserve">
            DESCANSO <br />
            MUSEO DEL ORO <br />$ 20000
          </div>
          <div className="total">Total: $ 17.000</div>
        </div>
        <button className="btn btn-warning btn-lg btn-block">Cancelar</button>
        <button className="btn btn-warning btn-lg btn-block">Pagar</button>
      </div>
    );
  }
}
