import React, { Component } from "react";
import "./Reservation.css";
import Reserve from "./cardReserve";
import axios from "axios";
import { setInStorage, getFromStorage } from "../../storage";

var hotel_id = getFromStorage("hotel_id");

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      totalHoteles: 0,
      totalActividades: 0
    };
  }

  consultarApi = async () => {
    const res = await axios.get(
      `https://api-aventurate.herokuapp.com/hotels/${hotel_id}`
    );
    this.setState({ resultados: res.data.hotel });
    // console.log(this.state.resultados);
  };

  componentDidMount = async () => {
    await this.consultarApi();
    // console.log(this.state.resultados);
  };

  totalHoteles = (res) => {
    let counter = 0
    if(res){
      // this.state.resultados.map(resultado => (
      //   counter += resultado.price_per_person
      // ))
      counter += parseInt(res.price_per_person)
    }
    return (counter);
  };

  mostrarresultados = () => {
    return (
      <React.Fragment>
        {this.state.resultados.map(resultado => (
          <Reserve key={resultado._id} info={resultado} />
        ))}
      </React.Fragment>
    );
  };

  render() {
    const { resultados } = this.state;
    return (
      <div className="Reservation">
        <div className="HotelsReserve">
          <h1>Hoteles</h1>
          {/* <React.Fragment>{this.mostrarresultados()}</React.Fragment> */}
          <Reserve
            info={resultados}
          />
          <div className="total">
            {resultados ? "Total: $ " +  this.totalHoteles(resultados) : null}
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
