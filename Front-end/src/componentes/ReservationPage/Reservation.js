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

                    <div className="cardReserve">
                        SANVALAY INN <br />
                        Tolima - Melgar <br />
                        Cl. 7b #13-21 <br />
                        $ 152.000
                        </div>
                    <div className="total">
                        Total: $ 152.000
                    </div>

                </div>

                <div className="ActivitiesReserve">
                    <h1>Actividades</h1>

                    <div className="cardReserve">
                        PARQUES NATURALES <br />
                        KAYAK <br />
                        $ 100.000
                    </div>
                    <div className="cardReserve">
                        EXCURSIONES <br />
                        SENDERISMO <br />
                        $ 50.000
                    </div>
                    <div className="cardReserve">
                        DESCANSO <br />
                        MUSEO DEL ORO <br />
                        $ 20.000
                    </div>
                    <div className="total">
                        Total: $ 170.000
                    </div>
                </div>
                <button className="btn btn-warning btn-lg btn-block">Cancelar</button>
                <button className="btn btn-warning btn-lg btn-block">Pagar</button>
            </div>
        )
    }
}
