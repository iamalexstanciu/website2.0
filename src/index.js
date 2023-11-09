import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
serviceWorker.register();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
