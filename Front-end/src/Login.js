import React, { Component } from "react";
import "./Login.css";
import Btnprincipal from "./componentes/btn-cambio";
import axios from "axios";
import { browserHistory } from 'react-router'; 


import {
  setInStorage,
  getFromStorage,
} from './storage';

class Login extends Component {
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
          var str = response.data.ErrorMsg.toString();
          console.log("str: " + str);
          

          if(str.includes("abierta"))
          {
            if( window.confirm(response.data.ErrorMsg + "¿Deseas cerrar sesión en todos los demás dispositivos?"))
            {
              var idUser = response.data.User[0]._id;
              axios
              .delete(`https://api-aventurate.herokuapp.com/user/closeSession/` + idUser)
              .then(response2 => {
                console.log(response2)
                if (response2.data.Error === true) {
                  console.log(
                    "ocurrio un error"
                  );
                  alert(response2.data.ErrorMsg)
                } else {
                  console.log("cerradas");
                  alert("Se cerraron con éxito todas tus sesiones. Ahora puedes iniciar sesión.")
                }
              })
              .catch(error => {
                console.log("this is error: ", error);
              });
            }
          }
          else
          {
            alert(response.data.ErrorMsg);
          }

        } else {
          console.log("Usuario existe");        
          console.log("Usuario existe" + response.data.Token);
          setInStorage("token", response.data.Token);
          document.location = "/";
          //this.props.history.push("/PerfilProveedor");
        }
      })
      .catch(error => {
        console.log("this is error", error);
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
                  <input
                    type="text"
                    id="User"
                    placeholder="&nbsp;"
                    onChange={event => this.valueToState(event.target)}
                  />
                  <span class="label">Correo electrónico</span>
                  <span class="border"></span>
                </label>
              </div>
              <div className="col-2" />
            </div>
            <div className="row campos">
              <div className="col-2" />
              <div className="col-8" align="center">
                <label for="inp" class="inp">
                  <input
                    type="password"
                    id="Password"
                    placeholder="&nbsp;"
                    onChange={event => this.valueToState(event.target)}
                  />
                  <span class="label">Contraseña</span>
                  <span class="border"></span>
                </label>
              </div>
              <div className="col-2" />
            </div>
            <br />
            <div className="row" align="center">
              <div className="col-12" >
                <span className="errorMsg">{this.state.ErrorMsg}</span>
              </div>
            </div>
            <div className="row" align="center">
              <div className="col-2" >
              </div>
              <div className="col-8">
                <button
                  type="button"
                  className="botonInicial1 btn btn-warning btn-lg btn-block"
                  onClick={this.consultarApi}
                >
                  Iniciar Sesión
                </button>
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
