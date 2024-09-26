import React, { useEffect, useState } from 'react'
import { Editor, Viewer } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import gemoji from '@bytemd/plugin-gemoji'
import frontmatter from '@bytemd/plugin-frontmatter'
import { createBlog } from '@/service'
import { useNavigate, useRequest } from '@/hooks'
import 'bytemd/dist/index.css'
import './style.css'

import zhHans from 'bytemd/locales/zh_Hans.json'
// 使用 lib 目录的样式文件
import 'highlight.js/styles/github.css'
import { Button, Input, message } from 'antd'
// import 'bytemd/dist/index.css'
// import '@highlight.js/styles/github.css' // 代码高亮样式

const plugins: any[] = [gfm(), gemoji(), frontmatter(), highlight()]
const Index: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }

  const create = useRequest(createBlog, {
    onError: (err) => {
      console.error(err)
    },
    onSuccess: (res) => {
      console.log(res)
    },
    manual: true,
  })

  const onSubmit = () => {
    if (!value || !title) {
      message.error('请输入标题或内容')
      return
    }
    create.run({
      title,
      content: value,
    })
    console.log(value, title)
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="h-[80px] p-4 flex items-center ">
        <Input.TextArea
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          placeholder="请输入标题"
          style={{ maxHeight: '80px' }}
          className="flex-grow mr-4" // 添加右边距
        />
        <Button onClick={onBack} className="mr-4">
          返回
        </Button>
        <Button onClick={onSubmit} type="primary">
          发布
        </Button>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="h-full overflow-auto">
          <Editor
            locale={zhHans}
            value={value} // 当前 Markdown 内容
            plugins={plugins} // 使用的插件
            onChange={(e) => {
              console.log(e)

              setValue(e)
            }} // 当内容改变时更新状态
            placeholder="在此输入中文内容..." // 中文占位符
          />
        </div>
      </div>

      {/* <h2>预览</h2>
      <Viewer value={value} plugins={plugins} /> */}
    </div>
  )
}

export default Index
