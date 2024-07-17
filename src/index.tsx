import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ConfigProvider } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#dbacf9',
        },
      }}
    >
      <div className="md:m-auto bg-white">
        <App />
      </div>
    </ConfigProvider>
  </BrowserRouter>,
)
