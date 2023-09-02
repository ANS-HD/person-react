import React from "react";
import { Layout, Menu, Tabs, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function Index() {
  const location = useLocation();
  console.log(location);

  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
      <Tabs defaultActiveKey={location.pathname}   >
      </Tabs>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key="/">
            <Link to="/">Home </Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default Index;
