import React, { lazy } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'
import blogRouters from './blog/router'

const NotFound = lazy(() => import('./pages/404'))
const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))
const Label = lazy(() => import('./pages/label'))
const User = lazy(() => import('./pages/user'))
const Login = lazy(() => import('./pages/login'))
const Layout = lazy(() => import('./layout'))
const Create = lazy(() => import('./pages/create'))
const Register = lazy(() => import('./pages/register'))
// import Home from './pages/home'
// import About from './pages/about'
// import Label from './pages/label'
// import User from './pages/user'
// import Login from '@/pages/login'
// import Layout from './layout'
// import Create from '@/pages/create'
// import Register from '@/pages/register'

const routes: (RouteObject & { auth?: boolean })[] = [
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Navigate to="/main/home" replace />,
  },
  {
    path: '/main',
    element: <Layout />,
    children: [
      {
        path: '/main/home',
        element: <Home />,
      },
      {
        path: '/main/about',
        element: <About />,
      },
      {
        path: '/main/label',
        element: <Label />,
      },
      {
        path: '/main/create',
        element: <Create />,
        index: true,
      },
      {
        path: '/main/user',
        element: <User />,
        index: true,
      },
      // {
      //   path: '/login',
      //   element: <Login />,
      //   // 需要token验证
      //   index: true,
      // },
      // {
      //   path: '/register',
      //   element: <Register />,
      // },
      // ...blogRouters,
    ],
  },
  {
    path: '/auth',
    element: <Outlet />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
        // 需要token验证
        index: true,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
    ],
  },
  // {
  //   path: '/',
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: '/home',
  //       element: <Home />,
  //     },
  //     {
  //       path: '/about',
  //       element: <About />,
  //     },
  //     {
  //       path: '/label',
  //       element: <Label />,
  //     },
  //     {
  //       path: '/create',
  //       element: <Create />,
  //       index: true,
  //     },
  //     {
  //       path: '/user',
  //       element: <User />,
  //       index: true,
  //     },
  //     // {
  //     //   path: '/login',
  //     //   element: <Login />,
  //     //   // 需要token验证
  //     //   index: true,
  //     // },
  //     // {
  //     //   path: '/register',
  //     //   element: <Register />,
  //     // },
  //     ...blogRouters,
  //   ],
  // },
]

export default routes
