import React, { Component } from 'react'

class PopupPago extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className='PopupReserve'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>Cerrar</button>
                    <button onClick={this.props.confirmPopup}>Confirmar</button>
                </div>
            </div>
        )
    }
}

export default PopupPago;