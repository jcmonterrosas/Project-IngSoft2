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
import Register from './Register'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
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
                  <Route path="/Login" component={Login} />
                  <Route path="/Register" component={Register} />
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