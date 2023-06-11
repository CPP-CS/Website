import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeOptions } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#00843d",
    },
    secondary: {
      main: "#ffb500",
    },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
