import React, { Component } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Home from './FiltroHotel';
/* import Test from './formularioPrueba';
import BuscarHotel from './BuscarHotel';*/


class App extends Component {
  render() {
    return (
      <div>
        <Route render={({ location }) => (
          <Switch location={location}>
            
          </Switch>
        )} />
      </div>
    );
  }
}


/* class App extends Component {
  render() {
    return (
      <div>
        <Route render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={FiltroHotel} />
            <Route path="/Hotel" component={BuscarHotel} />
            <Route path="/test" component={Test} />  
          </Switch>
        )} />
      </div>
    );
  }
}  */

export default App;
