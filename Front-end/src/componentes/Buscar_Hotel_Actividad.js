import React, { Component } from 'react';
import './Filtros.css';
import FiltroHotel from './FiltroHotel';
import FiltroActividad from './FiltroActividad';


export default class BuscadorHotel extends Component {



    Actividades = event => {
        event.preventDefault();
        const termino = this.Actividades;
        if (termino === "Actividades") {
            return (
                <FiltroActividad />
            )
        }
        else if (termino === "Hoteles") {
            return (
                <FiltroHotel />
            )
        }
    }

    ObtenerDatos = event => {
        event.preventDefault();
        const termino = event.preventDefault();
        return (
            termino
        )
    }

    handleClick() {
        return (

            <FiltroHotel />


        )
    }

    render() {
        return (

            <form onSubmit={this.ObtenerDatos}>
                <div className="row" id="botones">
                    <div className="col-6">
                        <input type="submit" className="btn btn-lg btn-warning btn-block"
                            value="Hoteles">
                        </input>
                    </div>
                    <div className="col-6">
                        <input type="submit" className="btn btn-lg btn-warning btn-block"
                            value="Actividades">
                        </input>
                    </div>
                </div>
            </form>
        );
    }
}

