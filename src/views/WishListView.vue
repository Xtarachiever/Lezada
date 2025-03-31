<template>
  <LayoutView>
    <BannerView details="home/wishlist"/>
    <div>
      <div v-if="isLoading" class="m-auto loader py-10"></div>
      <div v-else-if="!isLoading && wishlists.length > 0" class="max-w-[1000px] w-[95%] md:w-[85%] m-auto text-center py-12">
        <div class="hidden lg:block">
          <table class=" w-full border-collapse border border-gray4 hidden lg:block">
            <thead class="border-b border-gray4 w-full">
              <tr class="bg-gray-200 text-left w-full">
                <td class="p-6 w-1/2">PRODUCT</td>
                <td class="p-6 w-1/6">PRICE</td>
                <td class="p-6 w-1/2"></td>
                <td class="p-6 w-1/6"></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="wishlist in wishlists" :key="wishlist.product_id" class="text-center">
                <td class="p-6 flex items-center gap-4">
                  <div class="w-[120px] h-[120px] flex items-center overflow-clip">
                    <img :src="wishlist?.product?.image" :alt="wishlist?.product?.name"
                      class="object-cover w-full h-full" />
                  </div>
                  <p class="text-[14px] lg:max-w-[350px]">{{ wishlist?.product?.name }}</p>
                </td>
                <td class="p-6 font-[500]">$ {{ wishlist?.product?.price }}</td>
                <td>
                  <ButtonDiv name="Select Option"/>
                </td>
                <td class="p-6">
                  <div class="border-2 border-gray4 transition-all flex items-center w-full h-[45px] min-w-[45px] hover:border-tomatoRed cursor-pointer group"
                    @click="removeWishList(wishlist.id)">
                    <v-icon name="io-close-sharp" class="text-gray4 group-hover:text-tomatoRed w-full"></v-icon>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-for="wishlist in wishlists" :key="wishlist.product_id" class="border border-gray3 p-8 h-[850px] pb-16 relative block lg:hidden">
          <div>
            <v-icon name="md-close-sharp" class="absolute text-[8px] right-[10px] md:right-[30px] top-[5px] md:top-[15px] text-gray cursor-pointer close-icon" @click="removeWishList(wishlist.id)"></v-icon>
            <div>
              <div class="h-[600px] w-[95%] md:w-[80%] m-auto overflow-clip">
                <img :src="wishlist.product?.image" :alt="wishlist.product?.name" class="h-full w-full object-cover"/>
              </div>
              <div class="pt-10">
                <p>{{ wishlist.product?.name }}</p>
                <p>$ {{ wishlist.product?.price }}</p>
                <div class="pt-4">
                  <ButtonDiv name="Buy Now"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-[70px]" v-else>
        <v-icon name="ri-heart-3-line" scale="8" class="mb-4"></v-icon>
        <p class="py-[10px] pb-[15px] text-gray1 text-[20px]">No items found in wishlist</p>
        <ButtonDiv name="Shop Now"/>
      </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue';
import BannerView from '@/components/Reuseables/BannerView.vue';
import ButtonDiv from '@/components/Reuseables/ButtonDiv.vue';
import { useWishlistStore } from '@/store/wishlist';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
export default {
  components:{
    LayoutView,
    BannerView,
    ButtonDiv
  },
  setup(){
    const wishlistStore = useWishlistStore();
    const { wishlists, isLoading } = storeToRefs(wishlistStore);

    onMounted(()=>{
      wishlistStore.getAllWishlists();
    })

    const removeWishList = async (id) =>{
      await wishlistStore.handleDeleteWishlist(id);
    }

    return{
      wishlists,
      isLoading,
      removeWishList
    }
  }
}
</script>

<style>

</style>
