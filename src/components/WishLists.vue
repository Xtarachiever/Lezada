<template>
  <div class="text-gray1 pt-3 px-4">
    <div v-if="isLoading" class="loader m-[auto] py-10"></div>
    <div v-else-if="!isLoading && wishlists.length > 0">
      <div v-for="wishlist in wishlists" :key="wishlist.product_id" class="p-3 flex gap-[20px] relative">
        <div class="h-[60px] w-[60px]">
          <img :src="wishlist.product?.image" :alt="wishlist.product?.name" class="h-full w-full object-cover"/>
        </div>
        <div>
          <p class="text-[14px]">{{ wishlist?.product?.name }}</p>
          <p class="text-[14px] font-semibold text-black">$ {{ wishlist?.product?.price }}</p>
        </div>
        <v-icon name="md-close-sharp" scale="0.6" class="cursor-pointer close-icon" @click="removeWishList(wishlist?.id)"></v-icon>
      </div>
    </div>
    <p v-else>No items found in wishlist</p>
  </div>
</template>

<script>
import { useWishlistStore } from '@/store/wishlist';
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';


export default {
  setup(){
    const wishlistStore = useWishlistStore();
    const { wishlists, isLoading } = storeToRefs(wishlistStore);

    onMounted(()=>{
      wishlistStore.getAllWishlists();
    })

    const removeWishList = async (id) =>{
      await wishlistStore.handleDeleteWishlist(id);
    }

    watch(
      ()=> wishlists.value.length,
      (newVal, oldVal) => {
        if(newVal !== oldVal){
          wishlistStore.getAllWishlists();
        }
      }
    )

    return{
      wishlists,
      isLoading,
      removeWishList,
    }
  }
}
</script>

<style>

</style>
