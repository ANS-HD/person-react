import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
})

// instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.interceptors.request.use(
    config => {
        console.log(config) // 该处可以将config打印出来看一下，该部分将发送给后端（server端）
        // config.headers['Access-Control-Allow-Origin'] = '*'
        //   config.headers.Authorization = store.state.token
        return config // 对config处理完后返回，下一步将向后端发送请求
    },
    error => { // 当发生错误时，执行该部分代码
        console.log('eeeeee' , error) // 调试用
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(function (response) {
    // 响应状态码为 2xx 时触发成功的回调，形参中的 response 是“成功的结果”
    console.log(response);
    
    return response.data || {}
}, function (error) {
    console.log(error)
    // 响应状态码不是 2xx 时触发失败的回调，形参中的 error 是“失败的结果”
    // if (error.response.status === 401) {
    //   // 无效的 token
    //   // 把 Vuex 中的 token 重置为空，并跳转到登录页面
    //   // 1.清空token
    //   store.commit('updateToken', '')
    //   // 2.跳转登录页
    //   router.push('/login')
    // }
    return Promise.reject(error)
})

export const get = <T = any>(
    url: string,
    options?: {
        params?: any;
        data?: any
    }
): Promise<{ data: T }> => instance.get(url, options)

export const post = <T = any>(
    url: string,
    options?: {
        params?: any;
        data?: any
    }
): Promise<{ data: T }> => instance.post(url, options?.data, {
    // params: options?.params
})

export  default {
    get, post
}