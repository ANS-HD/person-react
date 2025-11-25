import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Index: React.FC = () => {
  const location = useLocation()
  return <div style={{ display: 'flex', height: '100vh' }}>
    <aside style={{ width: '256px', backgroundColor: '#1e40af', color: 'white', padding: '16px' }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Link 
          to="/createBlog/create" 
          style={{ 
            display: 'block', 
            padding: '8px 12px', 
            borderRadius: '4px', 
            textDecoration: 'none',
            color: 'white',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e3a8a'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          创建文章
        </Link>
        {/* <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Profile</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Settings</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Logout</a> */}
      </nav>
    </aside>

    <main style={{ flex: 1, padding: '24px', backgroundColor: 'white' }}>
          欢迎来到文章管理中心
    </main>
  </div>
}

export default Index
