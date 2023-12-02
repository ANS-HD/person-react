
import React, { useState } from "react";
import { Pages } from "./styled";
import { ProForm, ProFormRadio, ProFormText } from '@ant-design/pro-components';
import { Col, Row, Space, message } from 'antd';

const Index: React.FC = () => {
    // const [formLayoutType, setFormLayoutType] = useState<LayoutType>(
    //     LAYOUT_TYPE_HORIZONTAL,
    //   );
    return <Pages>
         <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>

    //   layout={
    //     labelCol: { span: 4 },
    //     wrapperCol: { span: 14 },
    //   }
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
        // await waitTime(2000);
        console.log(values);
        message.success('提交成功');
      }}
      params={{}}
      request={async () => {
        // await waitTime(100);
        return {
          name: '蚂蚁设计有限公司',
          useMode: 'chapter',
        };
      }}
    >
      <ProFormText
        width="md"
        name="name"
        label="签约客户名称"
        tooltip="最长为 24 位"
        placeholder="请输入名称"
      />
      <ProFormText
        width="md"
        name="company"
        label="我方公司名称"
        placeholder="请输入名称"
      />
      <ProFormText
        name={['contract', 'name']}
        width="md"
        label="合同名称"
        placeholder="请输入名称"
      />
    </ProForm>
    </Pages>
}

export default Index