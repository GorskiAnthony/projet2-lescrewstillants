import React from "react";
import ReactDOM from "react-dom/client";
import { MealsContextProvider } from "@contexts/MealsContext";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MealsContextProvider>
      <App />
      <ToastContainer />
    </MealsContextProvider>
  </BrowserRouter>
);
