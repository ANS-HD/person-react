import { useRequest, } from "@/hooks";
import { useNavigate } from "@/hooks";
import { Button, Form, Input, message } from "antd";
import React from "react";
import { userLogin } from "@/service";

const Index: React.FC = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const login = useRequest( userLogin, {
        onError: (err)=>message.error(err.message),
        onSuccess: (res) => {
            localStorage.setItem("Token", res.data.token);
            message.success('登陆成功!')
            navigate('/home')
        },
        manual: true

    } )
    const onFinish = (values: any) => {
        login.run(values)
    };
    return <div className="flex h-full items-center justify-center">
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
}

export default Index