import { toast } from 'react-toastify';

import { getUserName } from '../services/api/axios';



export const GetByUserName = (name:string) => {
    return getUserName.get(`${name}`).then((response) => {
      
        return response.data;
    }).catch(() => {
        toast.error("Usuario no encontrado")
    })
}