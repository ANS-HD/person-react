import { Button, Form, Input } from 'antd'
import React from 'react'

const Index: React.FC = () => {
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    console.log('Received values:', values)
  }
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-1/3  p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">登录</h2>
        <Form
          form={form}
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            required
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item
            required
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Index
