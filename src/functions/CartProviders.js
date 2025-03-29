import api from "./config";

const cartUrl = '/cart'
export const fetchAllCartProducts = async () =>{
  try{
    const response = await api.get(`${cartUrl}`);
    return response
  }catch(err){
    return err?.response
  }
}


export const addProductToCart = async (data) =>{
  try{
    const response = await api.post(`${cartUrl}/add`,data);
    return response
  }catch(err){
    return err?.response
  }
}

export const updateProductInCart = async ({data,id}) =>{
  try{
    const response = await api.put(`${cartUrl}/${id}`,data);
    return response
  }catch(err){
    return err?.response
  }
}

export const removeProductFromCart = async (id)=>{
  try{
    const response = await api.delete(`${cartUrl}/${id}`);
    return response
  }catch(err){
    return err?.response
  }
}

