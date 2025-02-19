<template>
  <LayoutView>
    <BannerView details="home/wishlist"/>
    <div class="text-center py-[70px]">
      <v-icon name="ri-heart-3-line" scale="8" class="mb-4"></v-icon>
      <p class="py-[10px] pb-[15px] text-gray1 text-[20px]">No items found in wishlist</p>
      <ButtonDiv name="Shop Now"/>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue';
import BannerView from '@/components/Reuseables/BannerView.vue';
import ButtonDiv from '@/components/Reuseables/ButtonDiv.vue';
export default {
  components:{
    LayoutView,
    BannerView,
    ButtonDiv
  }
}
</script>

<style>

</style>
