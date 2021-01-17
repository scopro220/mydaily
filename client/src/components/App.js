import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import LandingPage from "./LandingPage";
import Notes from "./Notes";
import Weather from "./Weather";

const App = () => {
  return (
    <div className="grid-container">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/notes" exact component={Notes} />
          <Route path="/weather" exact component={Weather} />
          <Route path="*">
            <div
              style={{
                textAlign: "center",
                fontSize: "30px",
                gridColumn: "2/4",
                gridRow: "2/3",
              }}
            >
              404 Page Not Found
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
