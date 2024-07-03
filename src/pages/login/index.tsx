import { useRequest, useNavigate } from '@/hooks'
import { Button, Form, Input, message } from 'antd'
import React from 'react'
import { userLogin } from '@/service'
import { Pages } from './styled'

const Index: React.FC = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const login = useRequest(userLogin, {
    onError: (err) => {
      console.log('err', err)

      message.error(err.message)
    },
    onSuccess: (res) => {
      console.log('res', res)

      localStorage.setItem('Token', res.data.token)
      message.success('登陆成功!')
      navigate('/home')
    },
    manual: true,
  })
  const onFinish = (values: any) => {
    login.run(values)
  }
  return (
    <Pages>
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
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: '20px' }}
          >
            登录
          </Button>
          <Button onClick={() => navigate('/register')}>注册</Button>
        </Form.Item>
      </Form>
    </Pages>
  )
}

export default Index
