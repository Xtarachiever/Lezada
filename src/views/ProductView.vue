<template>
  <LayoutView>
    <div v-if="isLoading" class="loader m-auto"></div>
    <div v-else-if="$route.query.productId">
      <BannerView :details="'home/shop/' + productName" />
      <div class="w-[80%] m-auto py-10">
        <div class="py-8 " v-if="product">
          <div class="flex flex-col lg:flex-row gap-[70px] border-b border-gray3 pb-14">
            <div>
              <img :src="product.image" :alt="product.name" class="h-full object-cover" />
            </div>
            <div class="">
              <div class="space-y-[14px] border-b border-gray3 pb-14">
                <div>
                  <p class="text-[25px]">{{ product.name }}</p>
                  <p class="py-2">{{ product.price }}</p>
                  <p class="text-gray1 py-2">{{ product.description }}</p>
                </div>
                <div class="flex gap-[20px]">
                  <p class="font-[500]">Size:</p>
                  <div class="flex gap-[8px]">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                  </div>
                </div>
                <div class="flex gap-[20px] items-center">
                  <p class="font-[500]">Color:</p>
                  <div class="flex gap-[8px] items-center">
                    <span class="color_tile bg-black"></span>
                    <span class="color_tile bg-blue1"></span>
                    <span class="color_tile bg-orange"></span>
                  </div>
                </div>
                <div class="flex gap-[20px] items-center">
                  <p class="font-[500]">Quantity: </p>
                  <div class="w-[100px] relative z-[1]">
                    <v-icon name="co-plus" class="absolute left-0 bottom-[18px] cursor-pointer z-[2]"
                      @click="updateQuantity(+1)"></v-icon>
                    <v-icon name="px-minus" class="absolute right-0 bottom-[18px] cursor-pointer z-[2]"
                      @click="updateQuantity(-1)"></v-icon>
                    <InputDiv v-model="quantity" moreStylings="text-center" />
                  </div>
                </div>
                <div class="flex gap-[20px] items-center pt-4 flex-wrap">
                  <ButtonDiv :name="isProductAdded ? 'Added to cart' : 'ADD TO CART'" @click="addProductToCart"/>
                  <ButtonDiv iconName="bi-heart" variant="border border-lightBlack hover:bg-lightBlack px-4 py-2"
                    iconColor="group-hover:text-white" />
                  <div
                    class="w-[52px] py-3 border border-lightBlack flex items-center justify-center hover:bg-lightBlack cursor-pointer group"
                    @mouseleave="hovered = false" @mouseover="hovered = true">
                    <compareIcon :color="hovered ? 'white' : 'black'" />
                  </div>
                </div>
              </div>
              <div class="flex flex-col space-y-[10px] other-product-details w-[90%] sm:w-[50%]">
                <p class="flex justify-between pt-4">
                  <span class="font-[500]">ID:</span>
                  <span>{{ product?.id }}</span>
                </p>
                <p class="flex justify-between">
                  <span class="font-[500]">Stock:</span>
                  <span>{{ product?.stock }}</span>
                </p>
                <p class="flex justify-between">
                  <span class="font-[500]">Category:</span>
                  <span>{{ product?.category }}</span>
                </p>
                <p class="flex justify-between">
                  <span class="font-[500]">Price:</span>
                  <span>{{ product?.price }}</span>
                </p>
                <div class="flex justify-between items-center">
                  <span class="font-[500]">Share on:</span>
                  <p class="text-gray flex gap-[20px] items-center">
                    <v-icon name="co-twitter"></v-icon>
                    <v-icon name="fa-facebook-f"></v-icon>
                    <v-icon name="fa-instagram"></v-icon>
                    <v-icon name="pr-youtube"></v-icon>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Description DIV -->
           <div class="py-4 pt-12">
            <div class="flex gap-[30px] justify-center text-[24px] py-4">
              <p class="cursor-pointer" :class="currentTab === 'description' ? 'text-black' : 'text-gray1'" @click="currentTab = 'description'">Description</p>
              <p class="cursor-pointer" :class="currentTab === 'additional' ? 'text-black' : 'text-gray1'" @click="currentTab = 'additional'">Additional Information</p>
            </div>
            <div v-if="currentTab === 'additional'" class="text-center py-4">
                <div>
                  <p>ID: {{ product?.id }}</p>
                  <p>Date Posted: {{ new Date(product?.updated_at).toLocaleDateString() }}</p>
                </div>
            </div>
            <div v-else class="py-4 text-center">
              <p>{{ product[currentTab] }}</p>
            </div>
           </div>
        </div>
      </div>
    </div>
    <div v-else>No product</div>
  </LayoutView>
</template>

<script>
import BannerView from '@/components/Reuseables/BannerView.vue';
import LayoutView from '@/components/dashboard/LayoutView.vue';
import { useProductStore } from '@/store/products';
import { useCartStore } from '@/store/cart';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import InputDiv from '@/components/Reuseables/InputDiv.vue';
import ButtonDiv from '@/components/Reuseables/ButtonDiv.vue';
import compareIcon from '../../public/compare-icon.vue';
import { storeToRefs } from 'pinia';
export default {
  props: [''],
  components: {
    BannerView,
    LayoutView,
    InputDiv,
    ButtonDiv,
    compareIcon
  },
  setup() {
    const route = useRoute();
    const productName = route.params.productName
    const productStore = useProductStore();
    const { isLoading } = storeToRefs(productStore)
    const cartStore = useCartStore();
    const currentTab = ref('description')

    const quantity = ref(1)
    const hovered = ref(false)

    const product = computed(() => productStore?.product?.data?.data)

    onMounted(() => {
      productStore.getSingleProduct(route?.query?.productId)
    })

    const isProductAdded = computed(()=> cartStore.cart.some(cartItem => cartItem.product_id == route?.query?.productId))

    watch(
      () => route.query.productId,
      (newProductId) => {
        if (newProductId) {
          productStore.getSingleProduct(newProductId)
        }
      }
    )

    // Methods
    const updateQuantity = (value) => {
      if(quantity.value + value < 1){
        return quantity.value = 1
      }else{
        return quantity.value += value
      }
    }

    const addProductToCart = async () => {
      try {
        if(!isProductAdded.value){
          const res = await cartStore.addProductsToCart({
            product_id: route.query.productId,
            quantity: quantity.value
          })
          console.log(res)
        }
      } catch (e) {
        console.log(e)
      }
    }

    return {
      productName,
      LayoutView,
      product,
      quantity,
      addProductToCart,
      updateQuantity,
      hovered,
      currentTab,
      isProductAdded,
      isLoading
    }
  }
}
</script>

<style>
.color_tile {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: block;
  position: relative;
  cursor: pointer;
}
.other-product-details p span:first-child{
  color: #333;
  font-weight: 550;
}
.other-product-details p span:last-child{
  color: #777;
}
</style>
