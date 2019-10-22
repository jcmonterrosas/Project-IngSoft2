import React, { Component } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Home from './Home';
// import Test from './formularioPrueba';
import BuscarHotel from './BuscarHotel';
import FiltrarActividades from './actividades/SearchActivities';
import FilActPersonas from './actividades/SAct_Personas'
import BuscarActividad from './BuscarActividad'
import Login from './Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: "",
      login: "",
      signin: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Header home="/" login="/Login" signin="/" />
        <div className="AllRoutes">
          <Route render={({ location }) => (
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
                  <Route path="/SearchActivities/Personas" component={FilActPersonas} />
                  <Route path="/SearchActivity" component={BuscarActividad} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;