import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./BLOG/App";
import { ContextProvider } from "./BLOG/context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
