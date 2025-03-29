import { addProductToCart, fetchAllCartProducts, removeProductFromCart } from "@/functions/CartProviders"
import { defineStore } from "pinia"

export const useCartStore = defineStore('cartStore',{
  state:()=>({
    cart:[],
    isLoading: false
  }),
  actions:{
    async getAllProductsInCart(){
      this.isLoading = true;
      const cartProducts = await fetchAllCartProducts();
      this.isLoading = false;
      if(cartProducts?.data?.status === 'success'){
        this.cart = cartProducts?.data?.data
      }
    },
    async addProductsToCart({product_id, quantity}){
      const productsAdded = await addProductToCart({
        product_id,
        quantity
      })
      if(productsAdded?.data?.status === 'success'){
        this.cart.push(productsAdded?.data?.data)
      }
      return productsAdded?.data
    },
    async removeProductsFromCart(cartId){
      const productRemovedFromCart = await removeProductFromCart(cartId)
      return productRemovedFromCart.data
    }
  }
})
