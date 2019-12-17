import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./Home";
// import Test from './formularioPrueba';
import BuscarHotel from "./BuscarHotel";
import FiltrarActividades from "./actividades/SearchActivities";
import FilActPersonas from "./actividades/SAct_Personas";
import FilActDate from "./actividades/SAct_Date";
import BuscarActividad from "./BuscarActividad";
import Login from "./Login";
import Register from "./Register";
import Perfil from "./componentes/Perfil";
import PerfilProveedor from "./PerfilProveedor";
import ProviderActivities from "./componentes/Provider-LoadData/ProviderActivities";
import ProviderHotels from "./componentes/Provider-LoadData/ProviderHotels";
import Reserva from "./componentes/ReservationPage/Reservation";
import { setInStorage, getFromStorage } from "./storage";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      count: 0
    };
  }

  async componentDidMount() {
    var token = getFromStorage("token");
    console.log(token);
    if (token != null && token.length > 0) {
      axios
        .get("https://api-aventurate.herokuapp.com/user/verify/" + token)
        .then(response => {
          console.log(response.data);
          if (response.data.UserLogon) {
            setInStorage("nombre", response.data.User.usr_nombre);
            setInStorage("img", response.data.User.images);
            setInStorage("id", response.data.User._id);
            setInStorage("pass", response.data.User.usr_pass);
            setInStorage("rol", response.data.User.usr_rol);
            setInStorage("telefono", response.data.User.usr_telefono);
            setInStorage("correo", response.data.User.usr_correo);
            setInStorage("tipo_doc", response.data.User.usr_tipo_doc);
            setInStorage(
              "identificacion",
              response.data.User.usr_identificacion
            );
            setInStorage("token", token);
          } else {
            setInStorage("nombre", "");
            setInStorage("id", "");
            setInStorage("rol", "");
            setInStorage("token", "");
            setInStorage("telefono", "");
            setInStorage("correo", "");
            setInStorage("tipo_doc", "");
            setInStorage("identificacion", "");
          }

          this.setState({
            isLoading: false
          });
        })
        .catch(err => {
          alert("Un error ocurrio, intenta nuevamente.");
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div className="App">
        <Header count={this.state.count}/>
        <div className="AllRoutes">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={400}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/SearchHotel" component={BuscarHotel} />
                    <Route exact path="/SearchActivities" component={FiltrarActividades} />
                    <Route path="/SearchActivities/People" component={FilActPersonas} />
                    <Route path="/SearchActivities/Date" component={FilActDate} />
                    <Route path="/SearchActivity" component={BuscarActividad} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/PerfilProveedor" component={PerfilProveedor} />
                    <Route path="/User" component={Perfil} />
                    <Route path="/ProviderActivities" component={ProviderActivities} />
                    <Route path="/ProviderHotels" component={ProviderHotels} />
                    <Route path="/MyReservation" component={Reserva} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
