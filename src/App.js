import React, { Component } from 'react';
import './styles/App.css';
import './styles/CSSTransitions.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./containers/Home";
import SelectParticipants from "./containers/SelectParticipants";
class App extends Component {
    render() {
/*            <Router>
                <Route
                    render={({ location, match }) => (
                        <TransitionGroup>
                            <CSSTransition in={match != null} key={location.key} timeout={1} classNames="fade" unmountOnExit>
                                <div>
                                    <Route  key={"wdsada"} exact path={["/"]} component={Home} />
                                    <Route key={"wdsada1"} path={["/contest/:gameId"]} component={SelectParticipants} />
                                </div>
                            </CSSTransition>
                        </TransitionGroup>)} />
            </Router>*/
        return (
                <Router>
                        <Route exact path={["/"]} component={Home} />
                        <Route path={["/contest/:gameId"]} component={SelectParticipants} />
                </Router>
        );
    }
}

export default App;
