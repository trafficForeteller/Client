import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyle } from "./style/globalStyle";
import theme from "./style/theme";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </HelmetProvider>,
  );
} else {
  root.render(
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </HelmetProvider>,
  );
}
