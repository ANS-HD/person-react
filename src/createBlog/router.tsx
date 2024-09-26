import React, { lazy, Children } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../layout'

const Create = lazy(() => import('./pages/create'))
const Home = lazy(() => import('./pages/home'))

export default [
  {
    path: '/createBlog/home',
    element: <Home />,
    index: true,
  },
  {
    path: '/createBlog/create',
    element: <Create />,
    index: true,
  },
]
