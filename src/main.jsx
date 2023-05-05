import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProvider from "./providers/AuthProvider";
import ThemeContextProvider from "./providers/ThemeContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeContextProvider>
      <RouterProvider router={router} />
      </ThemeContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
