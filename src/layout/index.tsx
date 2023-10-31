import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function Index() {
  const location = useLocation();

  return (
    <div className=" p-4 rounded-xl bg-white">

    <Layout className="layout">
      <Header>
        

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          style={{display:'flex',  }}
        >
          <Menu.Item key="/home">
            <Link to="/">博客主页 </Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">所有文章</Link>
          </Menu.Item>
          <Menu.Item key="/label">
            <Link to="/label">标签</Link>
          </Menu.Item>
          <Menu.Item key="/user">
            <Link to="/user">我的</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
    </div>

  );
}

export default Index;
