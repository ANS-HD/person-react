import React from "react";
import { useRequest } from '@/hooks'
import { Request } from "@/utils";
import { userList } from "@/service/home";
import { Input, Space, Tag, message  } from "antd";
import { SearchProps } from "antd/es/input";
import { tags, createTags } from "@/service";
import { Tags } from "@/components";

const { Search } = Input;



const defaultRecords = {
    total: 0,
    // list: []
}

const Index: React.FC = () => {
    console.log('home');
    const a =1
    const res = useRequest(() => userList({name: 'name1'}), {
        onSuccess: (res) => {
            
        },
        manual: true
    })

    const tagList= useRequest(() => tags(), {
        onError: (err) => message.error(err.message)
    })

    const createTag = useRequest( createTags ,{
        onError: (err) => message.error(err.message),
        manual: true
    })

    const onChange = (v:string) => {
        // ?根据tag更新列表
        console.log(v);
    }

    const onSearch: SearchProps['onSearch'] = (value: string) => createTag.run({tagName: value});


    return <div className="container w-full mt-2 mb-2">
            <div className=" container flex justify-between items-center w-full mb-2">
                <Search
                style={{width: 300}}
                placeholder="请输入关键字进行搜索"
                allowClear
                enterButton="搜索"
                onSearch={onSearch}
                />
                <Tags onChange={onChange}/>
            </div>

            <div>

                list
            </div>
    </div>
}

export default Index