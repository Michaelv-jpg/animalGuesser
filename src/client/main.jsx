import React from "react";
import ReactDOM from "react-dom/client";
import World from "./features/tasks/World"


import { Provider } from "react-redux";
import store from "./store";



import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <World /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
