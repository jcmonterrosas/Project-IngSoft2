import React, { Component } from "react";
import "./Login.css";
import backgroundlogin from "./img/Background_login.jpg";
import Btnprincipal from "./componentes/btn-cambio";

class Login extends Component {
    state = {
        User: String,
        Password: String,
    };

    valueToState = ({ name, value, checked, type }) => {
        this.setState(() => {
            return { [name]: type === "checkbox" ? checked : value };
        });
    };

    render() {
        return (

            <form>
                <div className="bodylogin">
                    <img className="background_login" src={backgroundlogin} alt="Background_Login" />
                </div>
                <div className="row">
                    <div className="col-4" />
                    <div className="backlog col-4" align="center">
                        <div className="row">
                            <div className="col-2" />
                            <div className="col-8" align="center">
                                <label htmlFor="User">User: </label>
                                <input
                                    name="User"
                                    type="String"
                                    className="form-control"
                                    placeholder="User"
                                    onChange={event => this.valueToState(event.target)}
                                />
                            </div>
                            <div className="col-2" />
                        </div>
                        <div className="row">
                            <div className="col-2" />
                            <div className="col-8" align="center">
                                <label htmlFor="Password">Password: </label>
                                <input
                                    name="Password"
                                    type="String"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={event => this.valueToState(event.target)}
                                />
                            </div>
                            <div className="col-2" />
                        </div><br />
                        <div className="row" align="center">

                            <div className="col-12" >
                                <Btnprincipal
                                    buttontext='Login'
                                    link="/Login"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="col-4" />
                </div>
            </form>
        );
    }
}


export default Login;
