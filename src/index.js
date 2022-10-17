import React from "react";
import ReactDOM from "react-dom/client";
import MainComponent from "./components/MainComponent";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);

reportWebVitals();
