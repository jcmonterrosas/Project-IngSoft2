import React, { Component } from "react";
import './Filtros.css';

class App extends Component {

    state = {
        Tipo_de_Actividad: '',
        Personas: Number,
        Fecha_Llegada: Date,
        Comida: '',
        Transporte: '',
        Guia: '',
        OrdenarPor: ''
    };

    valueToState = ({ name, value, checked, type }) => {
        this.setState(() => {
            return { [name]: type === "checkbox" ? checked : value };
        });
    };

    /*
    <pre>{JSON.stringify(this.state, null, 2)}</pre>  (MOSTRAR LOS ESTADOS)
    */

    render() {
        return (
            <div className="Hotel_container">
                <form>
                    <div className="row">
                        <br /><br /><br />
                        <div className="col-8" align="center">
                            <label htmlFor="color">Tipo de Actividad: </label>
                            <br />
                            <select
                                name="Tipo_de_Actividad: "
                                onChange={event => this.valueToState(event.target)}
                            >
                                <option value={""}>- Tipo de Actividad -</option>
                                <option value={"Culturar"}>Culturar</option>
                                <option value={"Extremo"}>Extremo</option>
                                <option value={"Gastronomia"}>Gastronomia</option>
                                <option value={"Turismo"}>Turismo</option>
                            </select>
                        </div>

                        <div className="col-4" align="center">
                            <label htmlFor="Personas">Personas: </label>
                            <input
                                name="Personas"
                                type="number"
                                className="form-control"
                                placeholder="0"
                                onChange={event => this.valueToState(event.target)}
                            />
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col-12" align="center">
                            <label>Fecha</label>
                            <input
                                name="Fecha_Llegada"
                                type="date"
                                className="form-control"
                                onChange={event => this.valueToState(event.target)}
                            />
                        </div><br/><br/><br/>
                    </div>

                    <div className="row">
                        <div className="col-4" align="center">
                            <input
                                name="Comida"
                                type="checkbox"
                                onChange={event => this.valueToState(event.target)}
                            /><br />
                            <label>Comida</label>
                        </div>
                        <div className="col-4" align="center">
                            <input
                                name="Transporte"
                                type="checkbox"
                                onChange={event => this.valueToState(event.target)}
                            /><br />
                            <label>Transporte</label>
                        </div>
                        <div className="col-4" align="center">
                            <input
                                name="Guia"
                                type="checkbox"
                                onChange={event => this.valueToState(event.target)}
                            /><br />
                            <label>Guia</label>
                        </div>
                    </div>

                    <div className="row" align="center">
                        <br /><br /><br />
                        <div className="col-12">
                            <label htmlFor="color">Odernar por: </label>
                            <br />
                            <select
                                name="Ordenar por:"
                                onChange={event => this.valueToState(event.target)}
                            >
                                <option value={""}>- selecciona uno -</option>
                                <option value={"mayor_precio"}>Menor precio</option>
                                <option value={"menor_precio"}>Mayor precio</option>
                                <option value={"mayor_puntaje"}>Mayor puntaje</option>
                                <option value={"menor_puntaje"}>Menor puntaje</option>
                            </select>
                        </div>
                    </div>
                </form >
                <div className="row justify-content-center">
                    <button type="button" className="btn btn-warning">Buscar</button>
                </div>
            </div >
        );
    }
}

export default App;