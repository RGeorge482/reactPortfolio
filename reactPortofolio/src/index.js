import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#FFF'
    },
    secondary: {
        main: '#000'
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
