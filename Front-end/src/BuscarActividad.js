import React, { Component } from "react";
import "./BuscarActividad.css";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";
import axios from "axios";
import Btncambio from "./componentes/btn-cambio";
import logo from "./img/Logo_PRINCIPAL.png"



class App extends Component {
  state = {
    termino: "",
    resultados: [],
    imagenes: [],
    pagina: "",
    click: false
  };


  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina !== 1) pagina--;
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
        pagina: 1,
        click: true
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
    this.setState({ resultados: res.data });
    console.log(this.state.resultados);

    /*fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));*/
  };

  render() {
    const style = this.state.click
          ? {}
          : {
              display: "none"
            };
        const style1 = this.state.click
          ? { marginTop: "20px" }
          : {
              width: "100% ",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            };
        const style2 = this.state.click
          ? {}
          : {
              width: "100%",
              height: "100%"
            };
        const style3 = this.state.click
            ? {height: "0"}
            : {height: "300px"};
            
        const classN = this.state.click ? "jumbotron " : "jumbotron-fluid ";
    return (
      <div style={style2} className="Actividad container">
        <div className="row logo" style={style3}>
              <div className="col" />
              <img  src={logo} width="40%" alt="Logo" />
              <div className="col" />
        </div>
        <div style={style1} className={classN+"col Buscador"}>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div style={style} className="Informacion row justify-content-center ">
          <div className="btn-group" role="group" aria-label="Basic example">
          <Btncambio 
                buttontext="Hoteles"
                link="/SearchHotel"
              />
            <Btncambio 
                buttontext="Actividades"
                disabled={true}
                link="/SearchActivity"
              />
          </div>
          <Resultado
            resultados={this.state.resultados}
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
