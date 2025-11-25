import React, { useState, useRef } from 'react'
import { Header, Footer, FloatBottom } from '@/components'
import { Outlet } from 'react-router-dom'
import { Flex } from 'antd'
const Index: React.FC = () => {
  return (
    <>
      {React.cloneElement(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Header */}
          <Header />

          {/* Main content area */}
          <div style={{ flexGrow: 1 }}>
            <Outlet />
          </div>

          {/* Footer */}
          <FloatBottom isFixed={false}>
            <Footer />
          </FloatBottom>
        </div>,
        {},
      )}
    </>
  )
}

export default Index
