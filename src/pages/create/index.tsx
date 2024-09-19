import React, { useState } from 'react'
import { Input, Button, Form, message, Tag, Upload } from 'antd'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import { PlusOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import 'react-mde/lib/styles/css/react-mde-all.css'

// 样式定义部分
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 24px;
`

const StyledInput = styled(Input)`
  font-size: 16px;
`

const StyledTextArea = styled(Input.TextArea)`
  font-size: 16px;
`

const StyledButton = styled(Button)`
  font-size: 16px;
  text-align: center;
  background-color: #1890ff;
  border-color: #1890ff;
  &:hover {
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
`

const TagWrapper = styled.div`
  margin-top: 8px;
`

const UploadWrapper = styled(Upload)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const ImagePreview = styled.img`
  max-width: 100px;
  margin-right: 10px;
  border-radius: 4px;
  object-fit: cover;
`

const MarkdownEditor = styled(ReactMde)`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`

// 组件逻辑
const WriteBlog = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState<string>('')
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const converter = new Showdown.Converter()

  const handleSubmit = async () => {
    if (!title || !description || !content) {
      message.error('请填写所有字段！')
      return
    }

    try {
      // await axios.post('/api/articles', { title, description, content, tags, images: imageUrls });
      // message.success('文章发布成功！');
      // setTitle('');
      // setDescription('');
      // setContent('');
      // setTags([]);
      // setImageUrls([]);
    } catch (error) {
      message.error('发布失败，请重试！')
    }
  }

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value)
  }

  const handleTagAdd = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput])
      setTagInput('')
    }
  }

  const handleTagClose = (removedTag: string) => {
    setTags(tags.filter((tag) => tag !== removedTag))
  }

  const handleImageUpload = (info: any) => {
    if (info.file.status === 'done') {
      const imageUrl = info.file.response.url
      setImageUrls([...imageUrls, imageUrl])
      message.success(`${info.file.name} 上传成功！`)
    }
  }

  return (
    <Container>
      <Form layout="vertical" onFinish={handleSubmit}>
        <StyledFormItem label="标题">
          <StyledInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="请输入文章标题"
          />
        </StyledFormItem>

        <StyledFormItem label="描述">
          <StyledTextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="请输入文章描述"
            rows={3}
          />
        </StyledFormItem>

        <StyledFormItem label="标签">
          <StyledInput
            value={tagInput}
            onChange={handleTagInputChange}
            onPressEnter={handleTagAdd}
            placeholder="输入标签并按回车添加"
          />
          <TagWrapper>
            {tags.map((tag) => (
              <Tag key={tag} closable onClose={() => handleTagClose(tag)}>
                {tag}
              </Tag>
            ))}
          </TagWrapper>
        </StyledFormItem>

        <StyledFormItem label="上传图片">
          <UploadWrapper
            action="/api/upload"
            listType="picture-card"
            name="file"
            onChange={handleImageUpload}
            accept="image/*"
          >
            {imageUrls.length >= 8 ? null : (
              <div>
                <PlusOutlined /> 上传图片
              </div>
            )}
          </UploadWrapper>
          <div>
            {imageUrls.map((url) => (
              <ImagePreview key={url} src={url} alt="uploaded" />
            ))}
          </div>
        </StyledFormItem>

        <StyledFormItem label="内容">
          <MarkdownEditor
            value={content}
            onChange={setContent}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </StyledFormItem>

        <StyledFormItem>
          <StyledButton type="primary" htmlType="submit">
            发布文章
          </StyledButton>
        </StyledFormItem>
      </Form>
    </Container>
  )
}

export default WriteBlog
