import React, { Component } from "react";
import './Filtros.css';

class App extends Component {

    state = {
        Personas: Number,
        Habitaciones: Number,
        Precio: Number,
        Fecha_Entrada: Date,
        Fecha_Salida: Date,
        Comida: '',
        Piscina: '',
        Parqueadero: '',
        Aire: '',
        Bar: '',
        WIFI: '',
        ParqInf: '',
        Mascotas: '',
        Gym: '',
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
            <div id="Filtros_content">
                <form>
                        <div className="row">
                            <div className="col-6" align="center">
                                <label htmlFor="Personas">Personas: </label>
                                <input
                                    name="Personas"
                                    type="number"
                                    className="form-control"
                                    placeholder="0"
                                    onChange={event => this.valueToState(event.target)}
                                />
                            </div>
                            <div className="col-6" align="center">
                                <label htmlFor="Habitaciones">Habitaciones: </label>
                                <input
                                    name="Habitaciones"
                                    type="number"
                                    className="form-control"
                                    placeholder="0"
                                    onChange={event => this.valueToState(event.target)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6" align="center">

                                <label>Fecha de Llegada </label>
                                <input
                                    name="Fecha_Llegada"
                                    type="date"
                                    className="form-control"
                                    onChange={event => this.valueToState(event.target)}
                                />

                            </div>
                            <div className="col-6" align="center">

                                <label>Fecha de Salida </label>
                                <input
                                    name="Fecha_Salida"
                                    type="date"
                                    className="form-control"
                                    onChange={event => this.valueToState(event.target)}
                                />
                            </div>
                        </div><br /><br />

                        <div className="row">
                            <div className="col-2" align="center">
                                <input
                                    name="WIFI"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label> WIFI</label>
                            </div>
                            <div className="col-2" align="center">
                                <input
                                    name="Comida"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label>Comida </label>
                            </div>
                            <div className="col-2" align="center">
                                <input
                                    name="Piscina"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label>Piscina </label>
                            </div>
                            <div className="col-3" align="center">
                                <input
                                    name="Aire"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label>Aire <br /> Acondicionado</label>
                            </div>
                            <div className="col-3" align="center">
                                <input
                                    name="ParqInf"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label>Parque Infantil </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3" align="center">
                                <input
                                    name="Parqueadero"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label>Parqueadero </label>
                            </div>
                            <div className="col-2" align="center"> 
                                <input
                                    name="Mascotas"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label>Mascotas </label>
                            </div>
                            <div className="col-2" align="center">
                                <input
                                    name="Bar"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label>Bar </label>
                            </div>

                            <div className="col-2" align="center">
                                <input
                                    name="Gym"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label>Gym </label>
                            </div>
                            <div className="col-3" align="center">
                                <input
                                    name="Transporte"
                                    type="checkbox"
                                    onChange={event => this.valueToState(event.target)}
                                /><br />
                                <label>Transporte </label>
                            </div>
                        </div>


                        <div className="row">
                            <br /><br /><br />
                            <div className="col" align="center">
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
  
                </form>
            <div className="row justify-content-center">
                <button type="button" className="btn btn-warning">Buscar</button>
            </div>
            </div >
        );
    }
}

export default App;