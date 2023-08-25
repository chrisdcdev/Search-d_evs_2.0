import { toast } from "react-toastify"
import { getUserName } from "../services/api/axios"
import { User } from "../model/User";



export const GetByUserName = ({name}:User) => {
    return getUserName.get(`${name}`).then((response) => {
      
        return response.data;
    }).catch(() => {
        toast.error("Usuario no encontrado")
    })
}