import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useRoutes } from '@/hooks'
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
  const [isAuth, setIsAuth] = useState<boolean>(false)

  function searchRouteDetail(
    path: string,
    routes: RouteObject[],
  ): RouteObject | null {
    for (let item of routes) {
      if (item.path === path) return item
      if (item.children) {
        return searchRouteDetail(path, item.children)
      }
    }
    return null
  }

  //全局路由守卫
  function guard(
    pathname: string, //类型在react-router-dom中导入
    navigate: NavigateFunction, //类型在react-router-dom中导入
    routes: RouteObject[],
  ) {
    //找到对应的路由信息，判断有没有权限控制
    const routeDetail = searchRouteDetail(pathname, routes)
    //没有找到路由，跳转404
    if (!routeDetail) {
      navigate('/404')
      return false
    }
    //如果需要权限验证
    if (routeDetail.auth) {
      const token = localStorage.getItem('blogtoken')

      if (!token) {
        message.error('请登录')
        navigate(-1)
        return false
      }
    }
    return true
  }

  useEffect(() => {
    setIsAuth(guard(location.pathname, navigate, routes))
  }, [location, navigate, routes])

  const Route = useRoutes(routes)

  return isAuth ? Route : null
}

export default Index
