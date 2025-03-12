import api from "./config";

export const fetchAllProducts = async () =>{
  try{
    const response = await api.get('/products');
    return response
  }catch(err){
    return err?.response
  }
}

export const fetchSingleProduct = async (id) =>{
  try{
    const response = await api.get(`/products/${id}`)
    return response
  }catch(err){
    console.log(err)
  }
}
