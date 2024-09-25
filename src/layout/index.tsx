import React, { useState, useRef } from 'react'
import { Header, Footer, FloatBottom } from '@/components'
import { Outlet } from 'react-router-dom'
import { Flex } from 'antd'
const Index: React.FC = () => {
  return (
    <>
      {React.cloneElement(
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />

          {/* Main content area */}
          <div className="flex-grow">
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
