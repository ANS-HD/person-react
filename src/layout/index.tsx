import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Headers } from '@/components'

const { Content, Footer } = Layout

function Index() {
  const location = useLocation()
  const navigate = useNavigate()
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#ddd',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#ddd',
  }

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
  }

  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  }

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#eee',
  }

  const [check, setCheck] = useState(location.pathname)

  useEffect(() => {
    setCheck(location.pathname)
  }, [location.pathname])

  return (
    <Layout>
      <header className="bg-gray text-white  flex justify-center items-center px-6">
        <div className="hidden  lg:flex lg:gap-x-12">
          <Link
            to="/home"
            className={`text-sm font-semibold  leading-full py-2 px-4 ${
              check === '/home' && 'bg-blue'
            }`}
          >
            博客主页{' '}
          </Link>
          <Link
            to="/about"
            className={`text-sm font-semibold  leading-full py-2 px-4 ${
              check === '/about' && 'bg-blue'
            }`}
          >
            所有文章
          </Link>
          <Link
            to="/label"
            className={`text-sm font-semibold  leading-full py-2 px-6 ${
              check === '/label' && 'bg-blue'
            }`}
          >
            标签
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/user"
            className={`text-sm font-semibold  leading-full py-2 px-6 ${
              check === '/user' && 'bg-blue'
            }`}
          >
            我的
          </Link>
        </div>
      </header>
      <Content className="pt-2 bg-gray-g">
        <Outlet />
      </Content>
    </Layout>
  )
}

export default Index
