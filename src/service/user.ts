import { Request } from "@/utils";

export const userList =(params: any) => Request.get('/users/userList',{
    params
}) 