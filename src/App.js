import React, { Component } from 'react';
import './styles/App.css';
import './styles/CSSTransitions.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from "./containers/Home";
import SelectParticipants from "./containers/SelectParticipants";

class App extends Component {
  render() {
    return (
        <Router>
              <Route exact path={["/"]} component={Home} />
              <Route path={["/contest/:gameId"]} component={SelectParticipants} />
        </Router>
    );
  }
}

export default App;
