import React from 'react'
import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => (
  <>
    {React.cloneElement(
      <div>
        <Header />
        <Outlet />
      </div>,
      {},
    )}
  </>
)

export default Layout
