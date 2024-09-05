import React, { useState } from 'react'
import {Header,Footer} from '@/components'
import { Outlet } from 'react-router-dom'
const Index: React.FC = () => {
  return (
    <>
      {React.cloneElement(
        <div className=" flex flex-col min-h-screen ">
          <Header />
              <div className=" flex-1 p-[12px] ">
                <Outlet />
              </div>

          <Footer/>
            {/* <Footer style={{ textAlign: 'center' }}>底部 created by hhd</Footer> */}
        </div>,
        {},
      )}
    </>
  )
}

export default Index
