import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import api from "./src/components/Api.jsx";

import NotFound from "./src/pages/NotFound.jsx";
import FormPage from "./src/pages/Form.jsx";

api.defaults.withCredentials = true;


const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <FormPage />,
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