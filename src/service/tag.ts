import { Request } from '@/utils'

export namespace Tags {
  export type Response = {
    list: {
      id: number
      tagName: string
    }[]
  }
}

export const tags = () => Request.get<Tags.Response>('/tags/list', {})

export const createTags = (data: any) =>
  Request.post('/tags/create', {
    data,
  })
