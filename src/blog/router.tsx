import React from "react";
import { Navigate } from "react-router-dom";
import Index from "./pages/index";

export default [
  {
    path: "/blog",
    element: <Navigate to="/blog/index" />,
    children: [
      {
        path: "index",
        element: <Index />,
      },
    ],
  },
];
