import { fetchAllProducts, fetchSingleProduct } from "@/functions/ProductsProviders"
import { defineStore } from "pinia"

export const useProductStore = defineStore('productStore',{
  state:()=>({
    products:[],
    product:[],
    isLoading: false
  }),
  actions:{
    async getProducts(){
      this.isLoading = true;
      const fetchedProducts = await fetchAllProducts();
      this.isLoading = false;
      this.products = fetchedProducts
    },
    async getSingleProduct(id){
      this.isLoading = true;
      const fetchedProduct = await fetchSingleProduct(id);
      this.isLoading = false;
      this.product = fetchedProduct
    }
  }
})
