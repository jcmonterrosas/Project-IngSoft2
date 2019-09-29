import React, { Component } from 'react';
/*import {
   // DropdownButton,
    Dropdown
  } from "react-dropdown"; */

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './BuscarHotel.css';
import Buscador from './componentes/Buscador';
import HotelesActividades from './componentes/Buscar_Hotel_Actividad';
import Resultado from './componentes/Resultado';
import FiltroHotel from './componentes/FiltroHotel';
import FiltroActividad from './componentes/FiltroActividad';
import './componentes/Filtros.css';



import filtro from "./img/filtro.png";
import logo from "./img/Logo_PRINCIPAL.png"

class App extends Component {

    state = {
        termino: '',
        imagenes: [],
        pagina: ''
    }

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
        })
    }

    paginaSiguiente = () => {

        let pagina = this.state.pagina;
        pagina++;
        this.setState({
            pagina
        }, () => {
            this.consultarApi();
        });

    }

    datosBusqueda = (termino) => {
        this.setState({
            termino: termino,
            pagina: 1
        }, () => {
            this.consultarApi();
        })
    }

    consultarApi = () => {
        const pagina = this.state.pagina;
        const url = `https://pixabay.com/api/?key=13669805-f32c8cf3c97ec348e21458fac&q=
    ${this.state.termino}&per_page=30&page=${pagina}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({ imagenes: resultado.hits }))

    }

    function() {
        "#Filtros".click(function () {
            this.next('#Filtros_content').slideToggle();
            this.ToggleClass('active');

        });
    }


    render() {
        return (
            <div className="Hotel container">
                <div className="jumbotron">
                    
                    <img  src={logo} height="30%" width="30%" alt="Logo" />
                    <Buscador datosBusqueda={this.datosBusqueda} />
                </div>
                <div className="row">

                    <div className="col-1"></div>
                    <div className="col-9" align="right">
                        <HotelesActividades />
                        {/*<button type="button" className="btn btn-warning">Hotel</button>
                        <button type="button" className="btn btn-warning" align="right">Actividad</button>*/}
                    </div>

                    <div className="col-2" align="right">
                        <UncontrolledDropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
                            <DropdownToggle caret>
                                <img type="button" className="btn btn-warning" src={filtro} height="50px" width="50" alt="Filtro" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><FiltroHotel /></DropdownItem>
                                <DropdownItem><FiltroActividad /></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Resultado
                        imagenes={this.state.imagenes}
                        paginaAnterior={this.paginaAnterior}
                        paginaSiguiente={this.paginaSiguiente} />
                </div>

            </div>
        );
    }
}

export default App;
