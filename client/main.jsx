import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import api from "./src/components/Api.jsx";

import Home from "./src/pages/Home.jsx";
import NotFound from "./src/pages/NotFound.jsx";
import FormPage from "./src/components/Form.jsx";
import "./src/css/style.css";

api.defaults.withCredentials = true;

const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerPath} />
  </StrictMode>
);