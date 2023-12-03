import { Request } from '@/utils'

export namespace UserLogin {
  export type Request = {
    username: string
    password: string
  }
  export type Response = {
    nickname: string
    token: string
    userId: number
  }
}
export namespace UserRegister {
  export type Request = {
    nickname: string
    username: string
    password: string
  }

  export type Response= {
    token: string
  }
}

export const userLogin = (data: UserLogin.Request) =>
  Request.post<UserLogin.Response>('/auth/login', {
    data,
  })

export const userRegister = (data: UserRegister.Request) =>
  Request.post<UserRegister.Response>('/auth/register', {
    data,
  })
