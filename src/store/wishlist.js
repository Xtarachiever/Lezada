import { addWishlist, deleteWishlist, fetchAllWishlists } from "@/functions/WishListProviders";
import { defineStore } from "pinia"

export const useWishlistStore = defineStore('wishlistStore',{
  state:()=>({
    wishlists:[],
    isLoading: false
  }),
  actions:{
    async getAllWishlists(){
      this.isLoading = true;
      const wishlist = await fetchAllWishlists();
      this.isLoading = false;
      if(wishlist?.data?.status === 'success'){
        this.wishlists = wishlist?.data?.data
      }
    },
    async addWishlists(product_id){
      const wishlistAdded = await addWishlist(product_id)
        if(wishlistAdded?.data?.status === 'success'){
          this.wishlists.push(wishlistAdded?.data?.data)
        }
        return wishlistAdded?.data
    },
    async handleDeleteWishlist(product_id){
      this.isLoading = true;
      const wishlistDeleted = await deleteWishlist(product_id);
      this.isLoading = false;
        if(wishlistDeleted?.data?.status === 'success'){
          this.wishlists = this.wishlists.filter((wishlist) => wishlist.id !== product_id);
          return {success: true}
        }
        return {success: false}
    },
  }
})
