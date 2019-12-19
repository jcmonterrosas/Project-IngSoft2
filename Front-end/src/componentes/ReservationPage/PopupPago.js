import React, { Component } from 'react'

class PopupPago extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="PopupReserve">
                <div className="popup_inner">
                    <h1>Detalle del pago</h1>
                    <div className="popupContainer">
                        <p className="info">Hoteles: </p>
                        <p className="money">{"$ " + this.props.hotels}</p>
                        <p className="info">Actividades: </p>
                        <p className="money">{"$ " + this.props.activities}</p>
                        <p className="infototal">Total: </p>
                        <p className="moneytotal">{"$ " + this.props.total}</p>
                        <button className="btn btn-warning btn-lg btn-block" onClick={this.props.closePopup}>Cerrar</button>
                        <button className="btn btn-warning btn-lg btn-block" onClick={this.props.confirmPopup}>Confirmar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupPago;