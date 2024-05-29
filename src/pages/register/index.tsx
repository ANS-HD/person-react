
import React, { useState } from "react";
import { Pages } from "./styled";
import { ProForm, ProFormRadio, ProFormText } from '@ant-design/pro-components';
import { Col, Row, Space, message } from 'antd';
import { useRequest, useNavigate } from "@/hooks";
import { userRegister } from "@/service";

const Index: React.FC = () => {
    // const [formLayoutType, setFormLayoutType] = useState<LayoutType>(
    //     LAYOUT_TYPE_HORIZONTAL,
    //   );
    const navigate = useNavigate()

    const register = useRequest((e)=>userRegister(e), {
      onError: (err) => {
        message.error(err.message)},
      onSuccess: (res) => {
        localStorage.setItem('Token', res.data.token)
        message.success('注册成功!')
        navigate('/home')
      },
      manual: true,
    })

    const fromLayout =  {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    }
    return <Pages>
         <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
    {...fromLayout}
      layout="horizontal"
    //   submitter={{
    //     render: (props, doms) => {
    //       return formLayoutType === LAYOUT_TYPE_HORIZONTAL ? (
    //         <Row>
    //           <Col span={14} offset={4}>
    //             <Space>{doms}</Space>
    //           </Col>
    //         </Row>
    //       ) : (
    //         doms
    //       );
    //     },
    //   }}
      onFinish={async (values) => {
        register.run(values)
      }}
      params={{}}
      // request={async () => {
      //   // await waitTime(100);
      //   return {
      //     name: '蚂蚁设计有限公司',
      //     useMode: 'chapter',
      //   };
      // }}
    >
      <ProFormText
        name="nickname"
        label="昵称"
        placeholder="请输入昵称"
        required
      />
      <ProFormText
        name="username"
        label="用户名"
        required
        placeholder="请输入用户名"
      />
      <ProFormText
        width="md"
        required
        name="password"
        label="密码"
        placeholder="请输入密码"
      />
    </ProForm>
    </Pages>
}

export default Index