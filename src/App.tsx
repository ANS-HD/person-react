import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { ConfigProvider } from "antd";

function App() {
  const GetRoutes = () => useRoutes(routes);
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       colorPrimary: "#00b96b",
    //       borderRadius: 2,

    //       // 派生变量，影响范围小
    //       colorBgContainer: "#f6ffed",
    //     },
    //   }}
    // >
      <GetRoutes />
    // </ConfigProvider>
  );
}

export default App;
