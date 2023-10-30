import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function Index() {
  const location = useLocation();

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          style={{display:'flex', justifyContent: 'space-between', }}
        >
          {/* <div> */}

          <Menu.Item key="/home">
            <Link to="/">博客主页 </Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">所有文章</Link>
          </Menu.Item>
          <Menu.Item key="/label">
            <Link to="/label">标签</Link>
            
          </Menu.Item>
          {/* </div> */}
          <Menu.Item key="/user">
            <Link to="/user">账号</Link>
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
