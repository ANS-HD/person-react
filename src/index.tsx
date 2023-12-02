import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ConfigProvider, theme } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
      <ConfigProvider
        theme={{
          // algorithm: theme.defaultAlgorithm,
          token: {
            // colorPrimary: '#24aee9',
            // colorBgBase: '#ffffff',
          },
        }}
      >
        <App />
      </ConfigProvider>
  </BrowserRouter>,
)
