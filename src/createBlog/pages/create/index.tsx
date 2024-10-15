import React, { useEffect, useState } from 'react'
import { Editor, Viewer } from '@bytemd/react'
import breaks from "@bytemd/plugin-breaks";
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import gemoji from '@bytemd/plugin-gemoji'
import mediumZoom from "@bytemd/plugin-medium-zoom";
import frontmatter from '@bytemd/plugin-frontmatter'
import { createBlog } from '@/service'
import highlightSSR from "@bytemd/plugin-highlight-ssr";
import { useNavigate, useRequest } from '@/hooks'
import 'bytemd/dist/index.css'
import './style.css'
import "highlight.js/styles/atom-one-dark.min.css";
import { common } from "lowlight";
import gfm_zhHans from 'bytemd/locales/zh_Hans.json'
// 使用 lib 目录的样式文件
import 'highlight.js/styles/github.css'
import { Button, Input, message } from 'antd'
// import 'bytemd/dist/index.css'
// import '@highlight.js/styles/github.css' // 代码高亮样式
// highlight需要额外扩充的高亮语言
import asciidoc from "highlight.js/lib/languages/asciidoc";
import dart from "highlight.js/lib/languages/dart";
import nginx from "highlight.js/lib/languages/nginx";
import zh_Hans from "bytemd/locales/zh_Hans.json";
import { merge } from "lodash-es";
import { type EditorProps } from "@bytemd/react";
import { BytemdCreate } from '@/components'

import ReactMarkdown from 'react-markdown';


export const sanitize: EditorProps["sanitize"] = (schema) => {
  const customerSchema = merge(schema, {
    tagNames: ["iframe"],
    attributes: {
      iframe: [
        "src",
        "style",
        "title",
        "all",
        "sandbox",
        "scrolling",
        "border",
        "frameborder",
        "framespacing",
        "allowfullscreen",
      ],
    },
  } as typeof schema);

  return customerSchema;
};

const plugins: any[] = [breaks(),
  mediumZoom()
  ,gfm({ locale: gfm_zhHans }),
   gemoji(), 
   frontmatter(),
    highlight(),
    highlightSSR({
      languages: {
        // @bytemd/plugin-highlight-ssr 是基于 rehype-highlight 的封装
        // 而 rehype-highlight 是基于 lowlight 的封装
        // 使用 lowlight 中一个叫 common 的配置对象，这个对象包含了常用的预定义的语言高亮配置，如 js,ts,go,css等等
        // 为什么不导入全量的高亮语言配置是因为全量的配置太大了，只导入常用的语言高亮配置就够了，这样可以减少打包出来的体积
        ...common,
  
        // 默认common配置中没有以下几个语言高亮配置，这里我们自己加上
        dart: dart, // flutter代码会用到dart
        nginx: nginx, // nginx配置文件高亮
        asciidoc: asciidoc, // asciidoc高亮, 控制台输出信息高亮
      },
    }),
  ]
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
          <BytemdCreate.BytemdEditor
           body={value}
           setContent={setValue}
          />
          {/* <Editor
            // locale={zhHans}
            locale={zh_Hans}
            sanitize={sanitize}
            preview={false} 
            value={value} // 当前 Markdown 内容
            plugins={plugins} // 使用的插件
            onChange={(e) => {
              console.log(e)

              setValue(e)
            }} // 当内容改变时更新状态
            placeholder="在此输入中文内容..." // 中文占位符
          /> */}
        </div>
      </div>
      {/* <h2>预览</h2>
      <Viewer value={value} plugins={plugins} /> */}
    </div>
  )
}

export default Index
