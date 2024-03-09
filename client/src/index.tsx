import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyle } from "./style/globalStyle";
import theme from "./style/theme";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>,
  );
} else {
  root.render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>,
  );
}
