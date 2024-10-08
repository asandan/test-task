import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss"
import "./styles/rsuite-custom.scss"
import 'rsuite/dist/rsuite.min.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

