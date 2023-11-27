import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ConfigProvider, theme } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: '#6492a6',
            colorBgBase: '#ffffff',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
