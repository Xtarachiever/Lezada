import api from "./config";

export const fetchAllProducts = async ({per_page, page, category}) =>{
  try{
    // const response = await api.get(`/products/${per_page ? `?per_page=${per_page}` : '10'}`);
    const response = await api.get(`/products?${per_page ? `per_page=${per_page}` : 'per_page=10'}&${page ? `page=${page}` : 'page=1'}&${category ? `category=${category}`: ''}`);
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
