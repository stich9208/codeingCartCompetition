import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginContainer from "./Components/pages/LoginContainer";
import SignupContainer from "./Components/pages/SignupContainer";
import App from "./App";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/cart" component={App} />
      </Switch>
    </Router>
  );
};

export default Routes;
