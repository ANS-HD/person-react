import React, { useState, useRef } from 'react'
import { Header, Footer, FloatBottom } from '@/components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Wrap, Content } from './styled'

const Placeholder = styled.div<{ height: number }>`
  height: ${({ height }) => height || 0}px;
`
const Index: React.FC = () => {
  return (
    <>
      {React.cloneElement(
        <Wrap>
          <Header />
          <Content>
            <Outlet />
          </Content>
          <FloatBottom>
            <Footer />
          </FloatBottom>
          {/* <Footer style={{ textAlign: 'center' }}>底部 created by hhd</Footer> */}
        </Wrap>,
        {},
      )}
    </>
  )
}

export default Index
