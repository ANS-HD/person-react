import React, { useEffect, useRef, useState } from 'react'
import { Input, Flex } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
const { Search } = Input

const Wrap = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: #fff;
`
const Placeholder = styled.div<{ height: number }>`
  height: ${({ height }) => height || 0}px;
`

const Index: React.FC = () => {
  const location = useLocation()
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef(null)
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
      <Placeholder height={headerHeight} />
      <Wrap ref={headerRef}>
        <Link
          to="/"
          className={`text-xl font-semibold  leading-full py-2 px-4 hover:text-pink`}
        >
          欢迎到来
        </Link>

        <Flex gap="large" align="center">
          <Link to="/home">主页</Link>
          <Link to="/label">标签</Link>
          <Link to="/user">我的</Link>
          <Link to="/create">创作中心</Link>
        </Flex>
      </Wrap>
      {/* <div style={{ height: 48, opacity: 1, overflow: 'hidden' }}></div> */}
    </>
  )
}

export default Index
