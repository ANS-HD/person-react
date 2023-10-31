import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  const GetRoutes = () => useRoutes(routes);
  return <GetRoutes/>;
}

export default App;
