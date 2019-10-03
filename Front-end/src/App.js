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
import Home from './Home';
// import Test from './formularioPrueba';
import BuscarHotel from './BuscarHotel';
import FiltrarActividades from './actividades/SearchActivities';
import FilActPersonas from './actividades/SAct_Personas'
import BuscarActividad from './BuscarActividad'

class App extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default App;