import { Request } from '../utils'

export const createBlog = (data: { title: string; content: string }) =>
  Request.post('/create/blog', {
    data,
  })
