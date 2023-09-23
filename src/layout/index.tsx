import React from "react";
import { Layout, Menu, Tabs, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

function Index() {
  const location = useLocation();

  return (
    <Layout className="layout">
      <Header >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key="/home">
            <Link to="/">Home </Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="/individual">
            <Link to="/individual">individual</Link>
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
