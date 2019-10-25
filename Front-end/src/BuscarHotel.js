import React, {Component} from "react";
import "./BuscarHotel.css";

import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";
import Btncambio from "./componentes/btn-cambio"
import axios from "axios";

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
        if (pagina !== 1) 
            pagina--;
        else 
            return null;
        this.setState({
            pagina
        }, () => {
            this.consultarApi();
        });
    };

    paginaSiguiente = () => {
        let pagina = this.state.pagina;
        pagina++;
        this.setState({
            pagina
        }, () => {
            this.consultarApi();
        });
    };

    datosBusqueda = (termino) => {
        this.setState({          
            termino: termino,
            pagina: 1,
            click: true
        }, () => {
            this.consultarApi();
        });
    };

    consultarApi = async() => {
        /*const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=13669805-f32c8cf3c97ec348e21458fac&q=
    ${this.state.termino}&per_page=30&page=${pagina}`;*/

        const res = await axios.get(`https://api-aventurate.herokuapp.com/hotels/${this.state.termino}`);
        this.setState({resultados: res.data});
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
            ? {display: "none"}
            : {};
    
        const classN = this.state.click ? "jumbotron col" : "jumbotron-fluid col";
        return (
          <div style={style2} className="Hotel container">
            <div className="row ">
              <div className="col" />
              <img src={logo} height="40%" width="40%" alt="Logo" style={style3}/>
              <div className="col" />
            </div>
            <div style={style1} className={classN}>
              <Buscador datosBusqueda={this.datosBusqueda} />
            </div>
            <div style={style} className="row justify-content-center ">
              <div className="btn-group" role="group" aria-label="Basic example">
                <Btncambio
                  buttontext="Hoteles"
                  disabled={true}
                  link="/SearchHotel"
                />
                <Btncambio buttontext="Actividades" link="/SearchActivities" />
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
    