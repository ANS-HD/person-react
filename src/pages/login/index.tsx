// import { useRequest, useNavigate } from '@/hooks'
// import { Button, Form, Input, message } from 'antd'
// import React from 'react'
// import { userLogin } from '@/service'
// import { Pages } from './styled'

// const Index: React.FC = () => {
//   const [form] = Form.useForm()
//   const navigate = useNavigate()

//   const login = useRequest(userLogin, {
//     onError: (err) => {
//       console.log('err', err)

//       message.error(err.message)
//     },
//     onSuccess: (res) => {
//       console.log('res', res)

//       localStorage.setItem('Token', res.data.token)
//       message.success('登陆成功!')
//       navigate('/home')
//     },
//     manual: true,
//   })
//   const onFinish = (values: any) => {
//     login.run(values)
//   }
//   return (
//     <Pages>
//       <Form
//         form={form}
//         name="login-form"
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//       >
//         <Form.Item
//           required
//           name="username"
//           rules={[{ required: true, message: '请输入用户名' }]}
//         >
//           <Input placeholder="用户名" />
//         </Form.Item>
//         <Form.Item
//           required
//           name="password"
//           rules={[{ required: true, message: '请输入密码' }]}
//         >
//           <Input.Password placeholder="密码" />
//         </Form.Item>
//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             style={{ marginRight: '20px' }}
//           >
//             登录
//           </Button>
//           <Button onClick={() => navigate('/register')}>注册</Button>
//         </Form.Item>
//       </Form>
//     </Pages>
//   )
// }

// export default Index
// //

import React from 'react'
import { Button, Form, Input, message } from 'antd'

const LoginPage: React.FC = () => {
  const handleLogin = async (values: {
    username: string
    password: string
  }) => {
    try {
      // 执行登录请求逻辑，例如：
      // await axios.post('/api/login', values);
      // message.success('登录成功！');
      console.log('Login values:', values)
    } catch (error) {
      message.error('登录失败，请重试！')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">登录</h2>
        <Form
          layout="vertical"
          onFinish={handleLogin}
          requiredMark={false} // 关闭必填标记
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名!' }]} // 必填验证
            className="mb-4"
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码!' }]} // 必填验证
            className="mb-6"
          >
            <Input.Password placeholder="请输入密码" />
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

export default LoginPage
