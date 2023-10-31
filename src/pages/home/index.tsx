import React from "react";
import { useRequest } from 'ahooks'
import { Request } from "../../utils";
import { userList } from "../../service/home";


const Index: React.FC = () => {
    console.log('home');
    const a =1
    const res = useRequest(() => userList({name: 'name1'}), {
        onSuccess: (res) => {
            
        }
    })

    return <div>
        das
    </div>
}

export default Index