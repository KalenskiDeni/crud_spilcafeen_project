import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/crud_spilcafeen_project/"}>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);