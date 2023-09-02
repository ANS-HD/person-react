import React, { useEffect, Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import routes from "./router";
import Layout from "./layout";

function App() {
  const GetRoutes = () => useRoutes(routes);
  useEffect(() => {
    console.log(window);
  }, []);
  return <GetRoutes/>;
}

export default App;
