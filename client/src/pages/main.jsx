import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import api from "../components/Api.jsx";

import App from "./App.jsx";
import NotFound from "./NotFound.jsx";

api.defaults.withCredentials = true;


const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerPath} />
  </StrictMode>
);