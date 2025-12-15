import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import RootLayout from "./Layout/RootLayout/RootLayout";
import router from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <RootLayout />
    </RouterProvider>
  </StrictMode>
);
