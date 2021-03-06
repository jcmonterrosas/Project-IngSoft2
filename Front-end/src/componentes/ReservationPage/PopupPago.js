import React, { Component } from "react";

class PopupPago extends Component {
    constructor(props) {
        super(props)
        
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
                        <p className="info totalprops">TOTAL: </p>
                        <p className="money totalprops">{"$ " + this.props.total}</p>
                        <button className="btn btn-warning btn-lg btn-block" onClick={this.props.closePopup}>Cerrar</button>
                        <button className="btn btn-warning btn-lg btn-block" onClick={this.props.confirmPopup} disabled={this.props.total > 0 ? false : true}>Confirmar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupPago;
