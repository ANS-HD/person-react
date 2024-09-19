import React, { useState } from 'react'
import { useRequest, useNavigate } from '@/hooks'
import { Header } from '@/components'
import { Request } from '@/utils'
import { userList } from '@/service/home'
import { Input, Space, Tag, message } from 'antd'
import { SearchProps } from 'antd/es/input'
import ReactMarkdown from 'react-markdown'
import { tags, createTags } from '@/service'
import { Tags } from '@/components'

const { Search } = Input

const defaultRecords = {
  total: 0,
  // list: []
}

const Index: React.FC = () => {
  const navigate = useNavigate()

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'React Hooks 入门',
      summary: '快速了解 React Hooks 的核心概念与使用方法。',
    },
    {
      id: 2,
      title: 'JavaScript ES6 特性',
      summary: '深入解析 ES6 的新特性及其在实际项目中的应用。',
    },
    {
      id: 3,
      title: 'Styled-Components 实战',
      summary: '如何在 React 项目中通过 styled-components 定制 UI 样式。',
    },
  ])
  // const res = useRequest(() => userList({ name: 'name1' }), {
  //   onSuccess: (res) => {},
  //   manual: true,
  // })

  // const tagList = useRequest(() => tags(), {
  //   onError: (err) => message.error(err.message),
  // })

  // const createTag = useRequest(createTags, {
  //   onError: (err) => message.error(err.message),
  //   manual: true,
  // })

  // const onChange = (v: string) => {
  //   // ?根据tag更新列表
  //   // navigate('/blog/index')
  // }

  // const onSearch = (value: string) => {
  //   createTag.run({ tagName: value })
  // }

  return (
    <div style={{ height: '123vh' }}>
      123234
      {/* <Tags onChange={onChange} /> */}
      {/* <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown> */}
    </div>
  )
}

export default Index
