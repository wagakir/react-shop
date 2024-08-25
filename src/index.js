import React from "react";
import * as ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <BrowserRouter basename="/react-shop/">
    {/* <BrowserRouter> */}
    <App />
  </BrowserRouter>
  // </StrictMode>
);
