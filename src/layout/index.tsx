// import React, { useEffect, useState } from 'react'
// import { Layout, Input } from 'antd'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
// import { SearchProps } from 'antd/es/input'
// import { Headers } from '@/components'

// const { Content, Footer } = Layout
// const { Search } = Input

// function Index() {
//   const location = useLocation()
//   // const navigate = useNavigate()
//   // const headerStyle: React.CSSProperties = {
//   //   textAlign: 'center',
//   //   color: '#ddd',
//   //   height: 64,
//   //   paddingInline: 50,
//   //   lineHeight: '64px',
//   //   backgroundColor: '#ddd',
//   // }

//   // const contentStyle: React.CSSProperties = {
//   //   textAlign: 'center',
//   //   minHeight: 120,
//   //   lineHeight: '120px',
//   //   color: '#fff',
//   //   backgroundColor: '#fff',
//   // }

//   // const siderStyle: React.CSSProperties = {
//   //   textAlign: 'center',
//   //   lineHeight: '120px',
//   //   color: '#fff',
//   //   backgroundColor: '#3ba0e9',
//   // }

//   // const footerStyle: React.CSSProperties = {
//   //   textAlign: 'center',
//   //   color: '#fff',
//   //   backgroundColor: '#eee',
//   // }

//   // const [check, setCheck] = useState(location.pathname)

//   // useEffect(() => {
//   //   setCheck(location.pathname)
//   // }, [location.pathname])

//   // const onSearch: SearchProps['onSearch'] = (value: string) => {
//   //   console.log(value)
//   // }

//   return (
//     <Content className=" bg-bgColor p-4">
//       <Outlet />
//     </Content>
//   )
// }

// export default Index

import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => <>{React.cloneElement(<Outlet />, {})}</>

export default Layout
