import React, { useEffect, useState } from 'react'
import { Layout,Input } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { SearchProps } from 'antd/es/input'
import { Headers } from '@/components'

const { Content, Footer } = Layout
const { Search } = Input

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

  
  const onSearch: SearchProps['onSearch'] = (value: string) => {
    console.log(value);
    
  }
    


  return (
    <Layout style={{ borderRadius: 8, minHeight: '100vh' }}>
      <div className="bg-white   flex  items-center p-2 ">
        <div className='w-auto'>
          <Link
            to="/home"
            className={`text-sm font-semibold  leading-full py-2 px-4 `}
          >
            博客主页
          </Link>
          <Link
            to="/about"
            className={`text-sm font-semibold  leading-full py-2 px-4 ${
              check === '/about'
            }`}
          >
            所有文章
          </Link>
          <Link
            to="/label"
            className={`text-sm font-semibold  leading-full py-2 px-6 ${
              check === '/label' 
            }`}
          >
            标签
          </Link>
        </div>
        <div className='ml-32 flex-1 mr-auto'>  <Search
          style={{ width: 300 }}
          placeholder="请输入关键字进行搜索"
          allowClear
          enterButton="搜索"
          onSearch={onSearch}
        /></div>
        <div className=" w-auto hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/user"
            className={`text-sm font-semibold  leading-full py-2 px-6 ${
              check === '/user' 
            }`}
          >
            我的
          </Link>
        </div>
      </div>
      <Content className="pt-2 bg-bgColor">
        <Outlet />
      </Content>
    </Layout>
  )
}

export default Index
