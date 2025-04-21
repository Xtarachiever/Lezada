import { fetchAllProducts, fetchSingleProduct } from "@/functions/ProductsProviders"
import { defineStore } from "pinia"

export const useProductStore = defineStore('productStore',{
  state:()=>({
    products:[],
    product:[],
    isLoading: false
  }),
  actions:{
    async getProducts({per_page = 10, page = 1,category=''}= {}){
      this.isLoading = true;
      const fetchedProducts = await fetchAllProducts({per_page, page,category});
      this.isLoading = false;
      this.products = fetchedProducts
      return fetchedProducts
    },
    async getSingleProduct(id){
      this.isLoading = true;
      const fetchedProduct = await fetchSingleProduct(id);
      this.isLoading = false;
      this.product = fetchedProduct
    }
  }
})
