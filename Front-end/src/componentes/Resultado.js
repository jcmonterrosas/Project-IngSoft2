import React, { Component } from "react";

import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

export default class Resultado extends Component {
  mostrarHoteles = () => {
    const hoteles = this.props.hoteles;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {hoteles.map(hotel => (
            <Imagen key={hotel._id} imagen={hotel} />
          ))}
        </div>
        <Paginacion
          paginaAnterior={this.props.paginaAnterior}
          paginaSiguiente={this.props.paginaSiguiente}
        />
      </React.Fragment>
    );
  };

  mostrarImagenes = () => {
    const imagenes = this.props.imagenes;

    if (imagenes.length === 0) return null;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {imagenes.map(imagen => (
            <Imagen key={imagen.id} imagen={imagen} />
          ))}
        </div>
        <Paginacion
          paginaAnterior={this.props.paginaAnterior}
          paginaSiguiente={this.props.paginaSiguiente}
        />
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.mostrarHoteles()}</React.Fragment>;
  }
}
