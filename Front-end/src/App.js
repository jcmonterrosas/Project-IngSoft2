import React, { Component } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Home from './Home';
// import Test from './formularioPrueba';
import BuscarHotel from './BuscarHotel';
import FiltrarActividades from './actividades/SearchActivities';


class App extends Component {
  render() {
    return (
      <div>
        <Route render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/SearchHotel" component={BuscarHotel} />
            <Route path="/SearchActivities" component={FiltrarActividades} />
          </Switch>
        )} />
      </div>
    );
  }
}

export default App;
