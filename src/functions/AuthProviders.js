
import api from "./config"
export const registerUsers = async (data) =>{
  try{
    const response = await api.post('/register',data);
    return response
  }catch(err){
    return err?.response
  }
}

export const loginUsers = async (data) =>{
  try{
    const response = await api.post('/login',data);
    return response
  }catch(err){
    return err?.response
  }
}
