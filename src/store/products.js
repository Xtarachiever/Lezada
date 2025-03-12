import { fetchAllProducts, fetchSingleProduct } from "@/functions/ProductsProviders"
import { defineStore } from "pinia"

export const useProductStore = defineStore('productStore',{
  state:()=>({
    products:[],
    product:[]
  }),
  actions:{
    async addProducts(){
      const fetchedProducts = await fetchAllProducts();
      this.products = fetchedProducts
    },
    async getSingleProduct(id){
      const fetchedProduct = await fetchSingleProduct(id);
      this.product = fetchedProduct
    }
  }
})
