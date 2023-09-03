import React, { useState } from "react";
import { Layout, Menu, Tabs, theme } from "antd";
import type { MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function Index() {
  const location = useLocation();
  console.log(location);
  const [current, setCurrent] = useState<string>(location.pathname);

  const items: MenuProps["items"] = [
    {
      label: (
        <Link className="" to="/home">
          主页
        </Link>
      ),
      key: "/home",
    },
    {
      label: <Link to="/about">关于</Link>,
      key: "/about",
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    
  };

  return (
    <Layout className="layout">
      <Header style={{display: 'flex', justifyContent: 'space-between', color: '#fff'}}>
        <Menu
        theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default Index;
