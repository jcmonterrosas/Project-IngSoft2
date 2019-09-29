import React, { Component } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Home from './Home';
import BuscarActividad from './BuscarActividad';
import BuscarHotel from './BuscarHotel';


class App extends Component {
  render() {
    return (
      <div>
        <Route render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/Hotel" component={BuscarHotel} />
            <Route path="/Actividad" component={BuscarActividad} />
          </Switch>
        )} />
      </div>
    );
  }
}

export default App;
