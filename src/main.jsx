import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import AutProvider from "./Provider/AutProvider";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AutProvider>
      <RouterProvider router={Routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AutProvider>
  </React.StrictMode>
);
