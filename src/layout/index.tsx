import React, { useState } from 'react'
import Header from '@/components/header'
import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
const { Content, Footer } = Layout
const Index: React.FC = () => {
  return (
    <>
      {React.cloneElement(
        <Layout style={{ display: 'flex', background: '#e8cbfd' }}>
          <Header />
          <div>
            <Content
              style={{
                margin: '16px 10vw',
                borderRadius: 8,
                minHeight: 630,
                background: '#fff',
              }}
            >
              <div className="p-[24px]  rounded">
                <Outlet />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>底部 created by hhd</Footer>
          </div>
        </Layout>,
        {},
      )}
    </>
  )
}

export default Index
