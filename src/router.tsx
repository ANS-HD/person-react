import React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import blogRouters from "./blog/router";
import Home from "./pages/home";
import About from "./pages/about";
import Label from "./pages/label";
import User from "./pages/user";
import Layout from "./layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "label",
        element: <Label />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "",
    element: <>404 Not Found!</>,
  },
  ...blogRouters,
];

export default routes;
