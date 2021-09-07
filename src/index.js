import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//react can only render one component at a time
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//component is a function that returns HTML
