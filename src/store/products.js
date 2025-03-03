import { fetchAllProducts } from "@/functions/ProductsProviders"
import { defineStore } from "pinia"

export const useProductStore = defineStore('productStore',{
  state:()=>({
    products:[]
  }),
  actions:{
    async addProducts(){
      const fetchedProducts = await fetchAllProducts();
      this.products = fetchedProducts
    }
  }
})
