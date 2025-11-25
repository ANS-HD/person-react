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
      <div style={{ margin: '0 auto', minWidth: '1200px', backgroundColor: 'white' }}>
        <App />
      </div>
    </ConfigProvider>
  </BrowserRouter>,
)
