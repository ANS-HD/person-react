
// import React, { useState } from "react";
// import { Pages } from "./styled";
// import { ProForm, ProFormRadio, ProFormText } from '@ant-design/pro-components';
// import { Col, Row, Space, message } from 'antd';
// import { useRequest, useNavigate } from "@/hooks";
// import { userRegister } from "@/service";

// const Index: React.FC = () => {
//     // const [formLayoutType, setFormLayoutType] = useState<LayoutType>(
//     //     LAYOUT_TYPE_HORIZONTAL,
//     //   );
//     const navigate = useNavigate()

//     const register = useRequest((e)=>userRegister(e), {
//       onError: (err) => {
//         message.error(err.message)},
//       onSuccess: (res) => {
//         localStorage.setItem('Token', res.data.token)
//         message.success('注册成功!')
//         navigate('/home')
//       },
//       manual: true,
//     })

//     const fromLayout =  {
//       labelCol: { span: 4 },
//       wrapperCol: { span: 14 },
//     }
//     return <Pages>
//          <ProForm<{
//       name: string;
//       company?: string;
//       useMode?: string;
//     }>
//     {...fromLayout}
//       layout="horizontal"
//     //   submitter={{
//     //     render: (props, doms) => {
//     //       return formLayoutType === LAYOUT_TYPE_HORIZONTAL ? (
//     //         <Row>
//     //           <Col span={14} offset={4}>
//     //             <Space>{doms}</Space>
//     //           </Col>
//     //         </Row>
//     //       ) : (
//     //         doms
//     //       );
//     //     },
//     //   }}
//       onFinish={async (values) => {
//         register.run(values)
//       }}
//       params={{}}
//       // request={async () => {
//       //   // await waitTime(100);
//       //   return {
//       //     name: '蚂蚁设计有限公司',
//       //     useMode: 'chapter',
//       //   };
//       // }}
//     >
//       <ProFormText
//         name="nickname"
//         label="昵称"
//         placeholder="请输入昵称"
//         required
//       />
//       <ProFormText
//         name="username"
//         label="用户名"
//         required
//         placeholder="请输入用户名"
//       />
//       <ProFormText
//         width="md"
//         required
//         name="password"
//         label="密码"
//         placeholder="请输入密码"
//       />
//     </ProForm>
//     </Pages>
// }

// export default Index

import React from 'react';
import { Button, Form, Input, message } from 'antd';

const RegisterPage: React.FC = () => {
  const handleRegister = async (values: { nickname: string; username: string; password: string }) => {
    try {
      // 执行注册请求逻辑，例如：
      // await axios.post('/api/register', values);
      // message.success('注册成功！');
      console.log('Register values:', values);
    } catch (error) {
      message.error('注册失败，请重试！');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">用户注册</h2>
        <Form
          layout="vertical"
          onFinish={handleRegister}
          requiredMark={false} // 关闭必填标记
        >
          <Form.Item
            name="nickname"
            label="昵称"
            rules={[{ required: true, message: '请输入昵称!' }]} // 必填验证
            className="mb-4"
          >
            <Input placeholder="请输入昵称" />
          </Form.Item>

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
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
