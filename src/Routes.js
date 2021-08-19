import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./Components/pages/LoginPage";
import SignupContainer from "./Components/pages/SignupContainer";
import CartPage from "./Components/pages/CartPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
