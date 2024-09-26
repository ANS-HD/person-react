import React, { useEffect, useRef, useState } from 'react'
import { Input, Flex } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const { Search } = Input

const Index: React.FC = () => {
  const location = useLocation()
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef<HTMLDivElement | null>(null) // 类型定义
  const [check, setCheck] = useState(location.pathname)

  useEffect(() => {
    setCheck(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }

    // 监听窗口大小变化，动态更新 header 高度
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }

    window.addEventListener('resize', handleResize)

    // 清除事件监听
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* 动态占位 div，确保内容不被 header 遮挡 */}
      <div style={{ height: `${headerHeight}px` }} />
      <nav
        className="fixed left-0 right-0 h-12 flex justify-between items-center px-6 z-[9999] bg-white shadow-sm"
        ref={headerRef}
      >
        <Link
          to="/"
          className="text-xl font-semibold leading-full py-2 px-4 hover:text-pink"
        >
          欢迎到来
        </Link>

        <Flex gap="large" align="center">
          <Link to="/main/home">主页</Link>
          <Link to="/main/label">标签</Link>
          <Link to="/main/user">我的</Link>
          <Link to="/auth/create">创作中心</Link>
        </Flex>
      </nav>
    </>
  )
}

export default Index
