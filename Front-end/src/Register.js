import React, { Component } from "react";
import "./Register.css";
import Btnprincipal from "./componentes/btn-cambio";


class Register extends Component {
    state = {
        Nombre: String,
        Contraseña: String,
        Telefono: String,
        Correo: String,
        TipoDocumento: String,
        Rol: String,
        FechaNacimiento: Date
    };


    valueToState = ({  value,id }) => {
        switch(id){
            case "Nombre":
                    this.setState({Nombre: value});
                break;
            case "Telefono":
                    this.setState({Telefono: value});
                break;
            case "Correo":
                    this.setState({Correo: value});
                break;
            case "Contraseña":
                    this.setState({Contraseña: value});
                break;
            case "TipoDocumento":
                    this.setState({TipoDocumento: value});
                break;
            case "Rol":
                    this.setState({Rol: value});
                break;
            case "FechaNacimiento":
                    this.setState({FechaNacimiento: value});
                break;
        }
        console.log(this.state);
    };

    render() {
        return (
            <div className="Register">
                <div className="row">
                    <div className="jumbotron-fluid Registerbody" align="center">
                        <div className="row">
                            <div className="col-12" align="center">
                                <h1>Bienvenido</h1>
                            </div>
                        </div>
                        <div className="row campos">
                            <div className="col-6" align="center">
                                <label for="inp" className="inp">
                                    <input type="text" id="Nombre" placeholder="&nbsp;" onChange={event => this.valueToState(event.target)} />
                                    <span className="label">Nombre</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div className="col-6" align="center">
                                <label for="inp" className="inp">
                                    <input type="text" id="Telefono" placeholder="&nbsp;" onChange={event => this.valueToState(event.target)} />
                                    <span className="label">Telefono</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div/>
                        </div>
                        <div className="row campos">
                            <div className="col-6" align="center">
                                <label for="inp" className="inp">
                                    <input type="text" id="Correo" placeholder="&nbsp;" onChange={event => this.valueToState(event.target)} />
                                    <span className="label">Correo</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div className="col-6" align="center">
                                <label for="inp" className="inp">
                                    <input type="password" id="Contraseña" placeholder="&nbsp;" onChange={event => this.valueToState(event.target)} />
                                    <span className="label">Contraseña</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div/>
                        </div>
                        <div className="row campos">
                            <div className="input-group mb-3 col-6">
                            <select className="custom-select inp" id="TipoDocumento" onChange={event => this.valueToState(event.target)}>
                                <option selected>Tipo de documento...</option>
                                <option value="C.C">C.C</option>
                                <option value="T.I">T.I</option>
                                <option value="C.E">C.E</option>
                                <option value="P.S">P.S</option>
                            </select>
                            </div>
                            <div className="input-group mb-3 col-6">
                            <select className="custom-select inp" id="Rol" onChange={event => this.valueToState(event.target)}>
                                <option selected>Rol...</option>
                                <option value="Cliente">Cliente</option>
                                <option value="Proveedor">Proveedor</option>
                            </select>
                            </div>
                        </div>
                        <div className="row campos">
                            <div className="col-2"></div>
                            <div className="col-8 align-self-center" align="center">
                                <label for="inp" className="inp">
                                    <input type="date" id="FechaNacimiento" placeholder="&nbsp;" onChange={event => this.valueToState(event.target)} />
                                    <span className="label">Fecha de Nacimiento</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div/>
                        </div>
                        


                        <br />
                        <div className="row" align="center">
                            <div className="col-2" />
                            <div className="col-8" >
                                <Btnprincipal
                                    buttontext='Registrarse'
                                    link="/"
                                />
                                <div className="col-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Register;
