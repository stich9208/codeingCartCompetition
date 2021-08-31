import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import ResetStyle from "./style/ResetStyle";
import { theme } from "./style/Theme";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
