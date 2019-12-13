import React, { Component } from "react";

import Imagen from "./Imagen";
import Services from "./Services";
import Paginacion from "./Paginacion";

export default class Resultado extends Component {
  mostrarresultados = () => {
    const resultados = this.props.resultados;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {resultados.map(resultado => (
            <Services key={resultado._id} imagen={resultado} />
          ))}
        </div>
        <div >

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
    return <React.Fragment>{this.mostrarresultados()}</React.Fragment>;
  }
}
