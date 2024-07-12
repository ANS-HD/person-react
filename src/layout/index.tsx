import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => <>{React.cloneElement(<Outlet />, {})}</>

export default Layout
