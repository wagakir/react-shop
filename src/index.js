import React from "react";
import * as ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import "./index.scss";
import App from "./App";
// import ErrorPage from "./error-page";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <ErrorPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/*   <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);