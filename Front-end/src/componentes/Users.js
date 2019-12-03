import React, { Component } from "react";
import "./Perfil.css";
import Btnprincipal from "./btn-cambio";
import axios from "axios";
import foto from "../img/Octocat.png";

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import filtro from "../img/menu.png";

class Users extends Component {
    state = {
        User: String,
        Password: String
    };


    valueToState = ({ value, id }) => {
        switch (id) {
            case "User":
                this.setState({ User: value });
                break;
            case "Password":
                this.setState({ Password: value });
                break;
        }
        console.log(this.state);
    };

    consultarApi = async () => {
        axios
            .post(`https://api-aventurate.herokuapp.com/user/login`, {
                usr_correo: this.state.User,
                usr_pass: this.state.Password
            })
            .then(response => {
                if (response.data.Error === true) {
                    console.log(
                        "Ususario no existe o contraseña incorrecta, crear uno nuevo"
                    );
                } else {
                    console.log("Usuario existe");
                }
            })
            .catch(error => {
                console.log("this is error", error);
            });
    };

    render() {
        return (
            <div className="Perfil" align="center">
                <div className="row">
                    <div className="jumbotron" align="center">
                        <div className="row">
                            <div className="col-2" align="left" />
                            <div className="col-8" align="left" >
                                <h1>Bienvenido Pepito</h1>
                            </div>
                            <div className="col-2" align="center">
                                <UncontrolledDropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
                                    <DropdownToggle caret>
                                        <img type="button" className="btn btn-warning" src={filtro} height="80%" width="80%" alt="Filtro" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#">Perfil</DropdownItem>
                                        <DropdownItem href="#">Viajes</DropdownItem>
                                        <DropdownItem href="#">Reservas</DropdownItem>
                                        <DropdownItem href="#">Cuenta</DropdownItem>
                                        <DropdownItem href="/Login">Salir</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12" align="center">
                                <img src={foto} height='80%' width='25%' />
                            </div>
                        </div>
                        <div className="row campos">
                            <div className="col-2" />
                            <div className="col-8" align="center">
                                <label for="inp" class="inp">
                                    <span class="label">Nombre de usuario</span>
                                    <br />
                                    <span class="label">Pepito Perez</span>
                                    <span class="border"></span>
                                </label>
                            </div>
                            <div className="col-2" />
                        </div>
                        <div className="row campos">
                            <div className="col-2" />
                            <div className="col-8" align="center">
                                <label for="inp" class="inp">
                                    <span class="label">Correo Electronico</span>
                                    <br />
                                    <span class="label">crmartinezco@gmail.com</span>
                                </label>
                            </div>
                            <div className="col-2" />
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
