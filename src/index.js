import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import ResetStyle from "./style/ResetStyle";

ReactDOM.render(
  <>
    <ResetStyle />
    <Routes />
  </>,
  document.getElementById("root")
);
