import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Index: React.FC = () => {
  const location = useLocation()
  return <div className="flex h-screen">
    <aside className="w-64 bg-blue-800 text-white p-4">
      <nav className="space-y-2">
        <Link to="/createBlog/create" className="block py-2 px-3 rounded hover:bg-blue-700">创建文章</Link>
        {/* <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Profile</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Settings</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Logout</a> */}
      </nav>
    </aside>

    <main className="flex-1 p-6 bg-white">
          欢迎来到文章管理中心
    </main>
  </div>
}

export default Index
