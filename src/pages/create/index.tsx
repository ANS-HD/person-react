import React, { useEffect, useState } from 'react'
import { Editor, Viewer } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import gemoji from '@bytemd/plugin-gemoji'
import frontmatter from '@bytemd/plugin-frontmatter'
import 'bytemd/dist/index.css'
import './style.css'

import zhHans from 'bytemd/locales/zh_Hans.json'
// 使用 lib 目录的样式文件
import 'highlight.js/styles/github.css'
import { Button, Input } from 'antd'
// import 'bytemd/dist/index.css'
// import '@highlight.js/styles/github.css' // 代码高亮样式

const plugins: any[] = [gfm(), gemoji(), frontmatter(), highlight()]
const Index: React.FC = () => {
  const [value, setValue] = useState('')

  const onBack = () => {}

  const onSubmit = () => {}

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ height: '80px', padding: '16px', display: 'flex', alignItems: 'center' }}>
        <Input.TextArea
          placeholder="请输入标题"
          style={{ maxHeight: '80px', flexGrow: 1, marginRight: '16px' }}
        />
        <Button onClick={onBack} style={{ marginRight: '16px' }}>
          返回
        </Button>
        <Button onClick={onSubmit} type="primary">
          发布
        </Button>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '16px' }}>
        <div style={{ height: '100%', overflow: 'auto' }}>
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
