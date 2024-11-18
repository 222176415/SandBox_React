import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Header from "./Header";
import Body from "./Body";
import footer from "./footer";
import counterApp from "./challenge";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header Username="Themba Ntimane" />
    <counterApp />
    <Body title="Themba Ntimane" />
    <App />
    <footer />
  </StrictMode>
);
