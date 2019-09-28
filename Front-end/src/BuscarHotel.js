import React, { Component } from "react";
import "./BuscarHotel.css";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";
import axios from "axios";

class App extends Component {
  state = {
    termino: "",
    hoteles: [],
    imagenes: [],
    pagina: ""
  };

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina != 1) pagina--;
    else return null;
    this.setState(
      {
        pagina
      },
      () => {
        this.consultarApi();
      }
    );
  };

  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina++;
    this.setState(
      {
        pagina
      },
      () => {
        this.consultarApi();
      }
    );
  };

  datosBusqueda = termino => {
    this.setState(
      {
        termino: termino,
        pagina: 1
      },
      () => {
        this.consultarApi();
      }
    );
  };

  consultarApi = async () => {
    /*const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=13669805-f32c8cf3c97ec348e21458fac&q=
    ${this.state.termino}&per_page=30&page=${pagina}`;*/

    const res = await axios.get(
      `https://api-aventurate.herokuapp.com/hotels/${this.state.termino}`
    );
    this.setState({ hoteles: res.data });
    console.log(this.state.hoteles);

    /*fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));*/
  };

  render() {
    return (
      <div className="Hotel container">
        <div className="jumbotron">
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-warning">
              Hotel
            </button>
            <button type="button" class="btn btn-warning">
              Actividad
            </button>
          </div>
          <Resultado
            hoteles={this.state.hoteles}
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
