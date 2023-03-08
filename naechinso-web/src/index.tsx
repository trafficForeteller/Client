import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyle } from "./style/globalStyle";
import theme from "./style/theme";

TagManager.initialize({ gtmId: "GTM-WF2ND2B" });

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
