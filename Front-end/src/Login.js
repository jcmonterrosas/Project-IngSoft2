import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import {
  setInStorage
} from './storage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: String,
      Password: String
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleChange(event) {
    const target = event.target;
    switch (target.id) {
        case "Usuario":
            this.setState({ User: target.value });
            break;
        case "Contraseña":
            this.setState({ Password: target.value });
            break;
        default:
            break;
    }
    console.log(this.state)
}

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

  handleSubmit(event) {
    this.consultarApi();
    event.preventDefault();
}

  render() {
    return (
      <div className="Login">
        <form className="LoginForm" onSubmit={this.handleSubmit}>
          <h1>Bienvenido</h1>
          <label htmlFor="inp" className="inp">
              <input
                  type="email"
                  id="Usuario"
                  placeholder="&nbsp;"
                  onChange={this.handleChange}
                  required
              />
              <span className="label">Correo electrónico</span>
              <span className="border"></span>
          </label>
          <label htmlFor="inp" className="inp">
                  <input
                    type="password"
                    id="Contraseña"
                    placeholder="&nbsp;"
                    onChange={this.handleChange}
                    required
                  />
                  <span className="label">Contraseña</span>
                  <span className="border"></span>
          </label>
          <span className="errorMsg">{this.state.ErrorMsg}</span>
          <input type="submit" value="Iniciar Sesión" className="btn btn-warning btn-lg btn-block"/>
        </form>
      </div>
    );
  }
}

export default Login;
