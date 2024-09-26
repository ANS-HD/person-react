// import React, { useState } from 'react'
// import { Input, Button, Form, message, Tag, Upload, UploadProps } from 'antd'
// import ReactMde from 'react-mde'
// import { PlusOutlined } from '@ant-design/icons'
// import 'react-mde/lib/styles/css/react-mde-all.css'

// // interface WriteBlogProps {}

// const WriteBlog: React.FC<WriteBlogProps> = () => {
//   const [title, setTitle] = useState<string>('')
//   const [description, setDescription] = useState<string>('')
//   const [content, setContent] = useState<string>('')
//   const [tags, setTags] = useState<string[]>([])
//   const [tagInput, setTagInput] = useState<string>('')
//   const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')
//   const [imageUrls, setImageUrls] = useState<string[]>([])

//   const converter = new Showdown.Converter()

//   const handleSubmit = async () => {
//     if (!title || !description || !content) {
//       message.error('请填写所有字段！')
//       return
//     }

//     try {
//       // await axios.post('/api/articles', { title, description, content, tags, images: imageUrls });
//       // message.success('文章发布成功！');
//       // setTitle('');
//       // setDescription('');
//       // setContent('');
//       // setTags([]);
//       // setImageUrls([]);
//     } catch (error) {
//       message.error('发布失败，请重试！')
//     }
//   }

//   const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTagInput(e.target.value)
//   }

//   const handleTagAdd = () => {
//     if (tagInput && !tags?.includes(tagInput)) {
//       setTags([...tags, tagInput])
//       setTagInput('')
//     }
//   }

//   const handleTagClose = (removedTag: string) => {
//     setTags(tags.filter((tag) => tag !== removedTag))
//   }

//   const handleImageUpload: UploadProps['onChange'] = (info) => {
//     if (info.file.status === 'done') {
//       const imageUrl = info.file.response?.url
//       if (imageUrl) {
//         setImageUrls([...imageUrls, imageUrl])
//         message.success(`${info.file.name} 上传成功！`)
//       }
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-5 bg-white rounded-lg shadow-md">
//       <Form layout="vertical" onFinish={handleSubmit}>
//         <Form.Item label="标题" className="mb-6">
//           <Input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="请输入文章标题"
//             className="text-base"
//           />
//         </Form.Item>

//         <Form.Item label="描述" className="mb-6">
//           <Input.TextArea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="请输入文章描述"
//             rows={3}
//             className="text-base"
//           />
//         </Form.Item>

//         <Form.Item label="标签" className="mb-6">
//           <Input
//             value={tagInput}
//             onChange={handleTagInputChange}
//             onPressEnter={handleTagAdd}
//             placeholder="输入标签并按回车添加"
//             className="text-base"
//           />
//           <div className="mt-2 flex flex-wrap gap-2">
//             {tags.map((tag) => (
//               <Tag key={tag} closable onClose={() => handleTagClose(tag)}>
//                 {tag}
//               </Tag>
//             ))}
//           </div>
//         </Form.Item>

//         <Form.Item label="上传图片" className="mb-6">
//           <Upload
//             action="/api/upload"
//             listType="picture-card"
//             name="file"
//             onChange={handleImageUpload}
//             accept="image/*"
//             className="flex flex-wrap gap-2"
//           >
//             {imageUrls.length >= 8 ? null : (
//               <div>
//                 <PlusOutlined /> 上传图片
//               </div>
//             )}
//           </Upload>
//           <div className="mt-2 flex flex-wrap gap-2">
//             {imageUrls.map((url) => (
//               <img
//                 key={url}
//                 src={url}
//                 alt="uploaded"
//                 className="w-24 h-24 rounded-md object-cover mr-2"
//               />
//             ))}
//           </div>
//         </Form.Item>

//         <Form.Item label="内容" className="mb-6">
//           <div className="border border-gray-300 rounded-md">
//             <ReactMde
//               value={content}
//               onChange={setContent}
//               selectedTab={selectedTab}
//               onTabChange={setSelectedTab}
//               generateMarkdownPreview={(markdown) =>
//                 Promise.resolve(converter.makeHtml(markdown))
//               }
//             />
//           </div>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" className="w-full text-base">
//             发布文章
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   )
// }

// export default WriteBlog

import React, { useState } from 'react'
import { Editor, Viewer } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import 'bytemd/dist/index.css'
import zhHans from 'bytemd/locales/zh_Hans.json'
// 使用 lib 目录的样式文件
// import 'highlight.js/styles/github.css';
// import 'bytemd/dist/index.css'
// import '@highlight.js/styles/github.css' // 代码高亮样式

const plugins: any[] = [gfm(), highlight()]
const Index: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Editor
        locale={zhHans}
        value={value} // 当前 Markdown 内容
        plugins={plugins} // 使用的插件
        onChange={setValue} // 当内容改变时更新状态
        placeholder="在此输入中文内容..." // 中文占位符
      />
      {/* <h2>预览</h2>
      <Viewer value={value} plugins={plugins} /> Markdown 预览 */}
    </>
  )
}

export default Index
