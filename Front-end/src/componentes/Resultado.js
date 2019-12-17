import React, { Component } from "react";

import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

export default class Resultado extends Component {
  mostrarresultados = () => {
    const resultados = this.props.resultados;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {resultados.map(resultado => (
            <Imagen key={resultado._id} imagen={resultado} />
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
