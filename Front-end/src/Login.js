import React, { Component } from "react";
import "./Login.css";
import Btnprincipal from "./componentes/btn-cambio";

class Login extends Component {
    state = {
        User: String,
        Password: String,
    };

    valueToState = ({ name, value, checked, type,id }) => {
        this.setState(() => {
            return { [name]: type === "checkbox" ? checked : value };
        });
    };

    render() {
        return (
            <div className="Login">
                <div className="row">
                    <div className="jumbotron" align="center">
                        <div className="row">
                            <div className="col-12" align="center">
                                <h1>Bienvenido</h1>
                            </div>
                        </div>
                        <div className="row campos">
                            <div className="col-2" />
                            <div className="col-8" align="center">
                                <label for="inp" class="inp">
                                    <input type="text" id="inp" placeholder="&nbsp;" onChange={event => this.valueToState(event.target)} />
                                    <span class="label">Nombre de usuario</span>
                                    <span class="border"></span>
                                </label>
                            </div>
                            <div className="col-2" />
                        </div>
                        <div className="row campos">
                            <div className="col-2" />
                            <div className="col-8" align="center">
                                <label for="inp" class="inp">
                                    <input type="password" id="inp" placeholder="&nbsp;" onChange={event => this.valueToState(event.target)} />
                                    <span class="label">Contraseña</span>
                                    <span class="border"></span>
                                </label>
                            </div>
                            <div className="col-2" />
                        </div><br />
                        <div className="row" align="center">
                            <div className="col-2" />
                            <div className="col-8" >
                                <Btnprincipal
                                    buttontext='Iniciar sesión'
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


export default Login;
