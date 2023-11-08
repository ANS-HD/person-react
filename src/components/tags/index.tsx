import { tags } from "@/service";
import { useRequest } from "ahooks";
import React from "react";

type Props = {
    onChange?: (value: string) => void
}

const Index: React.FC<Props> = (props) =>{

    
    const tagsList = useRequest(() => tags(), {
        onSuccess: (res) => {
            console.log('ress', res.data.list);
            
        }
    })

    return  <div className="">
          {!tagsList.loading && <div className="flex">
           {
                tagsList.data.data.list?.map((item) => {
                    return <p onClick={() => props.onChange(item.tagName)} className="m-2 hover:bg-red px-4 py-2 rounded-[5px] bg-blue" key={item.id} >{item.tagName}</p>
                })
            }
           </div>}
    </div>
}

export default Index