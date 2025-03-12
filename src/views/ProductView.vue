<template>
  <LayoutView>
    <div v-if="$route.query.productId">
      <BannerView :details="'home/shop/' + productName" />
      <div class="w-[80%] m-auto">
        <div class="py-8 " v-if="product">
          <div class="flex gap-[30px]">
            <div>
              <img :src="product.image" :alt="product.name" />
            </div>
            <div>
              <p class="text-[25px]">{{ product.name }}</p>
              <p class="py-2">{{ product.price }}</p>
              <p class="text-gray1 py-2">{{ product.description }}</p>
            </div>
          </div>
        </div>
        <div class="flex gap-[20px]">
          <p>Size:</p>
          <div class="flex gap-[8px]">
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>
        </div>
        <div class="flex gap-[20px] items-center">
          <p>Color:</p>
          <div class="flex gap-[8px] items-center">
            <span class="color_tile bg-black"></span>
            <span class="color_tile bg-blue1"></span>
            <span class="color_tile bg-orange"></span>
          </div>
        </div>
        <div>
          <p>Quantity: </p>
          <div class="w-full relative">
            <v-icon name="co-plus" class="absolute left-0 bottom-[15px]"></v-icon>
            <v-icon name="px-minus" class="absolute right-0 bottom-[15px]"></v-icon>
            <InputDiv v-model="quantity" moreStylings="text-center"/>
          </div>
        </div>
      </div>
    </div>
  </LayoutView>
</template>

<script>
import BannerView from '@/components/Reuseables/BannerView.vue';
import LayoutView from '@/components/dashboard/LayoutView.vue';
import { useProductStore } from '@/store/products';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import InputDiv from '@/components/Reuseables/InputDiv.vue';
export default {
  props: [''],
  components: {
    BannerView,
    LayoutView,
    InputDiv
  },
  setup() {
    const route = useRoute();
    const productName = route.params.productName
    const productStore = useProductStore()

    const quantity = ref(1)

    const product = computed(() => productStore?.product?.data?.data)

    onMounted(() => {
      productStore.getSingleProduct(route?.query?.productId)
    })

    watch(
      () => route.query.productId,
      (newProductId) => {
        if (newProductId) {
          productStore.getSingleProduct(newProductId)
        }
      }
    )
    // console.log(productName)

    return {
      productName,
      LayoutView,
      product,
      quantity
    }
  }
}
</script>

<style>
.color_tile{
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: block;
  position: relative;
  cursor: pointer;
}
</style>
