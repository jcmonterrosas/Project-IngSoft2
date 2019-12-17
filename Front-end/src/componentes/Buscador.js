import React, { Component } from "react";
import { Calendar } from "rb-datepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "./Buscador.css";

export default class Buscador extends Component {
  busquedaRef = React.createRef();

  busquedaRef = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      hide: true,
      date: "Fecha de llegada->Fecha de salida",
      style2:{top:this.props.top}
    };

    this.showCalendar = this.showCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
  }

  onDatesChange = ({ startDate, endDate }) => {
    const date1 = startDate.toString().split(" ");
    const date2 = endDate.toString().split(" ");
    const datefull =
      date1[1] +
      "/" +
      date1[2] +
      "/" +
      date1[3] +
      "->" +
      date2[1] +
      "/" +
      date2[2] +
      "/" +
      date2[3];
    this.setState({ hide: true, date: datefull });
  };

  showCalendar(e) {
    this.setState({ hide: false });
  }

  hideCalendar(e) {
    this.setState({ hide: true });
  }

  ObtenerDatos = e => {
    e.preventDefault();
    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);
    const tops=this.props.top==="300px"?"143px":"265px";
    this.setState({ style2: {top:tops}});
  };

  render() {
    const style1 = this.state.hide
      ? {
          display: "none"
        }
      : {};
      
    return (
      <form style={this.state.style2} className="Buscador2 container" onSubmit={this.ObtenerDatos}>
        <div className="form-group row justify-content-between filaBuscador">
          <div className="col-6">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control "
              placeholder="Ej: Santa Marta"
              onClick={this.hideCalendar}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              onClick={this.showCalendar}
              className="form-control"
              placeholder={this.state.date}
            />
            <div style={style1}>
              <Calendar
                onDatesChange={this.onDatesChange}
                showDropdowns={false}
                opens={"right"}
              />
            </div>
          </div>
          <div className="col-2">
            <input
              type="number"
              onClick={this.hideCalendar}
              className="form-control"
              placeholder="# personas"
            />
          </div>
        </div>
        <div className="form-group row justify-content-end">
          <input
            type="submit"
            className="Buscar col-2 align-self-end btn btn-warning "
            value="Buscar"
          />
        </div>
      </form>
    );
  }
}
