import React, { Component } from "react";
import "./Buscador.css";

export default class Buscador extends Component {
  busquedaRef = React.createRef();

  ObtenerDatos = e => {
    e.preventDefault();
    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      <form onSubmit={this.ObtenerDatos}>
        <div className="row filaBuscador">
          <div className="form-group col">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control Buscador "
              placeholder="Busca Hoteles en tu destino. Ejemplo: Santa Marta"
            ></input>
          </div>
          <div className="col input-group date">
            <input type="date" className="form-control"></input>
          </div>
          <div className="col">
            <input type="date" className="form-control"></input>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="# personas"
            ></input>
          </div>
          <div className="form-group col">
            <input
              type="submit"
              className="btn btn-lg btn-warning btn-block"
              value="Buscar"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}