import React, { Component } from 'react'
import "./Reservation.css"

export default class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="Reservation">
                <div className="HotelsReserve">
                    <h1>Hoteles</h1>
                    <h2>Hola</h2>
                </div>

                <div className="ActivitiesReserve">
                    <h1>Actividades</h1>
                    <h2>Hola</h2>
                </div>
            </div>
        )
    }
}
