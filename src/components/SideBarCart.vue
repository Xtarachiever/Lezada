<template>
  <div class="p-5">
    <div class="loader  m-auto" v-if="isLoading"></div>
    <div v-else-if="!isLoading && cart.length > 0">
      <div v-for="item in cart" :key="item.id" class="py-5 border-b border-lightGray">
        <div class="flex gap-[30px]">
          <div class="h-[80px] w-[80px]">
            <img :src="item?.product?.image" :alt="item?.product?.image" class="h-full w-full object-cover"/>
          </div>
          <div>
            <p class="text-[14px]">{{ item?.product?.name }}</p>
            <p> <span class="text-gray text-xs">{{ item?.quantity}} x </span> <span class="font-semibold text-[14px]">${{ item?.product?.price }}</span></p>
          </div>
          <v-icon name="md-close-sharp" scale="0.6" class="cursor-pointer" @click="handleRemoveProductFromCart(item.id)"></v-icon>
        </div>
      </div>
      <div class="border-t border-lightGray border-b font-semibold flex items-center py-4 justify-between my-6">
        <p>Subtotal:</p>
        <p>$ {{ calculateCartTotal.toFixed(2) }}</p>
      </div>
      <div class="w-full">
        <router-link to="/cart">
          <ButtonDiv name="View Cart" more-stylings="w-full"/>
        </router-link>
        <br />
        <ButtonDiv name="Checkout" more-stylings="w-full"/>
      </div>
      <p class="py-6 text-gray">Free Shipping on all orders over $100!</p>
    </div>
    <div v-else>
      <p>No Item Found</p>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/store/cart';
import { storeToRefs } from 'pinia';
import { computed, onMounted, watch } from 'vue';
import ButtonDiv from './Reuseables/ButtonDiv.vue';
export default {
  components:{
    ButtonDiv
  },
  setup(){
    const cartStore = useCartStore();
    const { cart, isLoading } = storeToRefs(cartStore);

    const calculateCartTotal = computed(()=>cart.value.reduce((total, product)=> total + (+product?.product?.price * product.quantity),0));

    const handleRemoveProductFromCart = async (cartId) => {
      const res = await cartStore.removeProductsFromCart(cartId)
      if (res?.status === 'success') {
        cartStore.getAllProductsInCart()
      }
    }

    watch(()=>cart.value.length,
      (newVal, oldVal) => {
        if(newVal !== oldVal){
          cartStore.getAllProductsInCart();
        }
      }
    )

    onMounted(()=>{
      cartStore.getAllProductsInCart();
    })

    return{
      cart,
      calculateCartTotal,
      handleRemoveProductFromCart,
      isLoading
    }
  }
}
</script>

<style>

</style>
