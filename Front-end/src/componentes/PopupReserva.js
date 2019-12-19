import React, { Component } from 'react'

class PopupReservaHotel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childs: null,
            adults: null,
            dateinit: null,
            datefinish: null,
            isSubmited: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        switch (target.id) {
            case "Chlids":
                this.setState({ childs: target.value });
                break;
            case "Adults":
                this.setState({ adults: target.value });
                break;
            case "DateInit":
                this.setState({ dateinit: target.value });
                break;
            case "DateFinish":
                this.setState({ datefinish: target.value });
                break;
            default:
                break;
        }
    }

    handleSubmit(event) {
        if(this.state.childs && (this.state.adults > 0) && this.state.dateinit && this.state.datefinish){
            alert(
                "Chlids: " +
                this.state.childs +
                "\nAdults: " +
                this.state.adults +
                "\nDateInit: " +
                this.state.dateinit +
                "\nDateFinish: " +
                this.state.datefinish
            );
        }
    }

    render() {
        return (
            <div className="PopupReserve">
                <div className="popup_innerhotels">
                    <h1>Completa tus datos y confirma tu reserva</h1>
                    <form className="popupFormHotels" onSubmit={this.props.confirmPopup}>
                        <label htmlFor="inp" className="inp">
                            <input
                                type="number"
                                id="Adults"
                                placeholder="&nbsp;"
                                onChange={this.handleChange}
                                min="1"
                                max="5"
                                step="1"
                                required
                            />
                            <span className="label">Cantidad de Adultos</span>
                            <span className="border"></span>
                        </label>
                        <label htmlFor="inp" className="inp">
                            <input
                                type="number"
                                id="Chlids"
                                placeholder="&nbsp;"
                                onChange={this.handleChange}
                                min="0"
                                max="5"
                                step="1"
                                required
                            />
                            <span className="label">Cantidad de Niños</span>
                            <span className="border"></span>
                        </label>
                        <label htmlFor="inp" className="inp">
                            <input
                                type="date"
                                id="DateInit"
                                placeholder="&nbsp;"
                                onChange={this.handleChange}
                                required
                            />
                            <span className="label">Llegada</span>
                            <span className="border"></span>
                        </label>
                        <label htmlFor="inp" className="inp">
                            <input
                                type="date"
                                id="DateFinish"
                                placeholder="&nbsp;"
                                onChange={this.handleChange}
                                required
                            />
                            <span className="label">Salida</span>
                            <span className="border"></span>
                        </label>
                        <input type="reset" className="btn btn-warning btn-lg btn-block" onClick={this.props.closePopup} value="Cerrar"/>
                        <input type="submit" className="btn btn-warning btn-lg btn-block" onClick={this.handleSubmit} value="Confirmar"/>
                    </form>
                </div>
            </div >
        )
    }
}

export default PopupReservaHotel;