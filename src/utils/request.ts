import axios from 'axios'
import { message } from 'antd'
let instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
})

// const navigate = useNavigate()

// instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.interceptors.request.use(
  (config) => {
    console.log(config) // 该处可以将config打印出来看一下，该部分将发送给后端（server端）
    // config.headers['Access-Control-Allow-Origin'] = '*'
      config.headers.Authorization =  `Bearer ${window.localStorage.getItem('Token')}`
    return config // 对config处理完后返回，下一步将向后端发送请求
  },
  (error) => {
    // 当发生错误时，执行该部分代码
    console.log('eeeeee', error) // 调试用
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  function (response) {
    // 响应状态码为 2xx 时触发成功的回调，形参中的 response 是“成功的结果”
    console.log(response)

    return response.data || {}
  },
  function (error) {
    console.log(error)
    // 响应状态码不是 2xx 时触发失败的回调，形参中的 error 是“失败的结果”
    if (error.response.status === 401) {
      // 无效的 token
      // 把 Vuex 中的 token 重置为空，并跳转到登录页面
      // 1.清空token
      message.error('登录已过期，请重新登录！！！')
      setTimeout(() => {
            localStorage.setItem('Token',null)
            window.location.href='http://localhost:9000/auth/login'
      }, 500);
  
      // 2.跳转登录页
      // navigate('/auth/login')
    }
    return Promise.reject(error.response.data)
  },
)

export const get = <T = any>(
  url: string,
  options?: {
    params?: any
    data?: any
  },
): Promise<{ data: T }> => instance.get(url, options)

export const post = <T = any>(
  url: string,
  options?: {
    params?: any
    data?: any
  },
): Promise<{ data: T }> =>
  instance.post(url, options?.data, {
    // params: options?.params
  })

export default {
  get,
  post,
}
