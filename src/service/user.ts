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

export const userLogin = (data: UserLogin.Request) =>
  Request.post<UserLogin.Response>('/auth/login', {
    data,
  })
