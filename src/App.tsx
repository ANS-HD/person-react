import React, { Suspense, useEffect, useState } from 'react'
import {
  useLocalStorageState,
  useLocation,
  useNavigate,
  useRoutes,
} from '@/hooks'
import type { NavigateFunction } from '@/hooks'
import routes from '@/router'
import { message } from 'antd'

export interface RouteObject {
  caseSensitive?: boolean
  children?: RouteObject[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  auth?: boolean
}

const Index: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [, setIsAuth] = useLocalStorageState<boolean>('auth', {
    defaultValue: false,
  })

  function searchRouteDetail(
    path: string,
    routes: RouteObject[],
  ): RouteObject | null {
    for (let item of routes) {
      console.log(item?.path, path)
      if (item?.path === path) {
        return item
      }
      if (item?.children) {
        const result = searchRouteDetail(path, item.children)
        if (result !== path) {
          return result // 如果找到了子路由，就返回结果，否则继续查找其他子路由
        }
      }
    }

    return null // 如果在当前路由和所有子路由中都没有找到匹配的路径，则返回null
  }

  //全局路由守卫
  function guard(
    pathname: string, //类型在react-router-dom中导入
    navigate: NavigateFunction, //类型在react-router-dom中导入
    routes: RouteObject[],
  ) {
    //找到对应的路由信息，判断有没有权限控制
    const routeDetail = searchRouteDetail(pathname, routes)
    console.log('routeDetail', routeDetail)

    //没有找到路由，跳转404
    if (!routeDetail) {
      navigate('/404')
      return false
    }
    //如果需要权限验证
    if (routeDetail.index) {
      const token = localStorage.getItem('Token')
      if (!token) {
        navigate('/login')
        return false
      }
    }
    return true
  }

  useEffect(() => {
    setIsAuth(guard(location.pathname, navigate, routes))
  }, [location.pathname])

  const Route = () => useRoutes(routes)

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Route />
    </Suspense>
  )
}

export default Index
