import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { Link, useLocation } from 'react-router-dom'
const { Search } = Input

const Index: React.FC = () => {
  const location = useLocation()
  const [check, setCheck] = useState(location.pathname)
  useEffect(() => {
    setCheck(location.pathname)
  }, [location.pathname])
  return (
    <div>
      <div className="fixed h-12 top-0 left-0 right-0 bg-lightPurple   text-white p-2 shadow-md">
        <nav className=" container min-w-custom   mx-auto flex text-base justify-between items-center pl-4 pr-4 ">
          <div className=" font-bold">
            <Link
              to="/"
              className={`text-xl font-semibold  leading-full py-2 px-4 hover:text-pink`}
            >
              欢迎到来
            </Link>
          </div>
          {/* {!props.isHide && (
        <div className=" flex-1 mr-auto">
          {' '}
          <Search
            style={{ width: 300 }}
            placeholder="请输入关键字进行搜索"
            allowClear
            enterButton="搜索"
            onSearch={props?.onSearch}
          />
        </div>
      )} */}
          <div className="flex space-x-4">
            <Link
              to="/home"
              className={`text-sm font-semibold  leading-full py-2 px-4 hover:text-pink
              ${check === '/home' ? 'text-yellow-500' : ''}
              `}
            >
              主页
            </Link>
            <Link
              to="/label"
              className={`text-sm font-semibold  leading-full py-2 px-6 hover:text-pink ${
                check === '/label' ? 'text-yellow-500' : ''
              }`}
            >
              标签
            </Link>
            <Link
              to="/user"
              className={`text-sm font-semibold  leading-full py-2 px-6 hover:text-pink ${
                check === '/user' ? 'text-yellow-500' : ''
              }`}
            >
              我的
            </Link>
            <Link
              to="/create"
              className={`text-sm font-semibold  leading-full py-2 px-6 hover:text-pink ${
                check === '/create' ? 'text-yellow-500' : ''
              }`}
            >
              创作中心
            </Link>
          </div>
        </nav>
      </div>
      <div style={{ height: 48 }}></div>
    </div>
  )
}

export default Index
