import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#147e7e",
      // Add light if needed
      // light: ""
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

export { theme };
