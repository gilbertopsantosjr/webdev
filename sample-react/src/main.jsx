import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductsList from "./App.jsx";
import "./index.css";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Form from "./Form.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>Hello</h1>
        <ul>
          <li>
            {" "}
            <Link to="/products"> List of Products </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/form"> Form for Products </Link>{" "}
          </li>
        </ul>
      </>
    ),
  },
  {
    path: "/products",
    element: <ProductsList />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
