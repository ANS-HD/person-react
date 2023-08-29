import React from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import blogRouters from './blog/router'
import Home from "./pages/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home"/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "*",
    element: <>404 Not Found!</>,
  },
  ...blogRouters
];

export default useRoutes(routes);
