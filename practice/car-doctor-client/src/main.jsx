import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  
    <AuthProvider>
      <StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </StrictMode>
    </AuthProvider>
);
