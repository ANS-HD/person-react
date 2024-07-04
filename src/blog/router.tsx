import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../layout'
import Index from './pages/index'
import My from './pages/my'

export default [
  //  {
  //   path: '/blog',
  //   element: <Layout></Layout>,
  //   children: [
  {
    path: '/blog/index',
    element: <Index />,
  },
  {
    path: '/blog/my',
    element: <My />,
  },
  //   ]
  //  }
]

// export default [
//   {
//     path: '/blog',
//     element: <Navigate to="/blog/index" replace />,
//   },
//   {
//     path: 'blog',
//     element: <Layout />,
//     children: [
//       {
//         path: 'index',
//         element: <Index />,
//       },
//       {
//         path: 'my',
//         element: <My />,
//       },
//     ],
//   },
// ]
