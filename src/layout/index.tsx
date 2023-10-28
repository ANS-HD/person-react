import React from "react";
import { Layout, Menu, Tabs, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function Index() {
  const location = useLocation();

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
          <Menu.Item key="/home">
            <Link to="/">博客主页 </Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">所有文章</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">标签</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于我</Link>
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
