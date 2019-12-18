import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import history from "./utils/history";
import AppBar from "./components/AppBar";
import TripsPage from "./components/TripsPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <AppBar/>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/trips" component={props => <TripsPage {...props} />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
