import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import blogRouters from './blog/router'
import Home from './pages/home'
import About from './pages/about'
import Label from './pages/label'
import User from './pages/user'
import Login from '@/pages/login'
import Layout from './layout'
import Register from '@/pages/register'

const routes: (RouteObject & { auth?: boolean })[] = [
  {
    path: '*',
    element: <>404 Not Found!</>,
  },
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/label',
        element: <Label />,
      },
      {
        path: '/user',
        element: <User />,
        index: true,
      },
      {
        path: '/login',
        element: <Login />,
        // 需要token验证
        index: true,
      },
      {
        path: '/register',
        element: <Register />,
      },
      ...blogRouters,
    ],
  },
]

export default routes
