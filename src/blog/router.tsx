import React, { lazy, Children } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../layout'

const Index = lazy(() => import('./pages/index'))

export default [
  //  {
  //   path: '/blog',
  //   element: <Layout></Layout>,
  //   children: [
  {
    path: '/blog/index',
    element: <Index />,
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
