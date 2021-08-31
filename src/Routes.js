import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import LoginPage from "./Components/pages/LoginPage";
import CartPage from "./Components/pages/CartPage";
import RegisterPage from "./Components/pages/RegisterPage";

const Routes = () => {
  return (
    <RouteContainer>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </RouteContainer>
  );
};

const RouteContainer = styled.main`
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
  overflow-y: hidden;
`;

export default Routes;
