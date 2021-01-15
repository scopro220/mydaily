import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import LandingPage from "./LandingPage";
import Notes from "./Notes";
import Weather from "./Weather";
import ToDo from "./ToDo";
import Directions from "./Directions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="grid-container">
            <Header />
            <Route path="/" exact component={LandingPage} />
            <Route path="/notes" exact component={Notes} />
            <Route path="/weather" component={Weather} />
            <Route path="/todo" component={ToDo} />
            <Route path="/directions" component={Directions} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
