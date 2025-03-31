import api from "./config";

const wishlistUrl = '/wishlist'
export const fetchAllWishlists = async () =>{
  try{
    const response = await api.get(`${wishlistUrl}`);
    return response
  }catch(err){
    return err?.response
  }
}


export const addWishlist = async (productId) =>{
  try{
    const response = await api.post(`${wishlistUrl}/add`,productId);
    return response;
  }catch(err){
    return err?.response
  }
}

export const deleteWishlist = async (productId) =>{
  try{
    const response = await api.delete(`${wishlistUrl}/${productId}`);
    return response;
  }catch(err){
    return err?.response
  }
}

