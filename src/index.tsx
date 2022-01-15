import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
