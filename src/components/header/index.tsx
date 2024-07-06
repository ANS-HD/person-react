import React, { useState } from 'react'
import { Input } from 'antd'
import { Link, useLocation } from 'react-router-dom'
const { Search } = Input

type Props = {
  onSearch: (v: string) => void
  isHide: boolean
}

const Index: React.FC<Props> = (props) => {
  const location = useLocation()
  const [check, setCheck] = useState(location.pathname)
  return (
    <div className="bg-white   flex  items-center p-2 ">
      <div className="w-auto">
        <Link
          to="/home"
          className={`text-sm font-semibold  leading-full py-2 px-4 `}
        >
          欢迎来到我的博客
        </Link>
      </div>
      {!props.isHide && (
        <div className="ml-96 flex-1 mr-auto">
          {' '}
          <Search
            style={{ width: 300 }}
            placeholder="请输入关键字进行搜索"
            allowClear
            enterButton="搜索"
            onSearch={props?.onSearch}
          />
        </div>
      )}
      <div className=" w-auto hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
          to="/home"
          className={`text-sm font-semibold  leading-full py-2 px-4 `}
        >
          主页
        </Link>
        <Link
          to="/label"
          className={`text-sm font-semibold  leading-full py-2 px-6 ${
            check === '/label'
          }`}
        >
          标签
        </Link>
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
  )
}

export default Index
