import { Request } from "../utils";

export const tags =(params: any) => Request.get('/tags/list',{
    params
}) 