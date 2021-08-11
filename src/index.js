import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./components/counter.component";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
