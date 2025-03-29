<template>
  <LayoutView>
    <BannerView details="home/carts" />
    <div class="text-center py-[70px]" v-if="cart.length === 0">
      <v-icon name="md-shoppingcart-round" scale="8" class="mb-4"></v-icon>
      <p class="py-[10px] pb-[15px] text-gray1 text-[20px]">No items found in carts</p>
      <ButtonDiv name="Shop Now" />
    </div>
    <div v-else class="w-[85%] md:w-[70%] m-auto py-8">
      <table class=" w-full border-collapse border border-gray4 hidden lg:block">
        <thead>
          <tr class="bg-gray-200 text-left">
            <td class="p-6">PRODUCT</td>
            <td class="p-6">PRICE</td>
            <td class="p-6">QUANTITY</td>
            <td class="p-6">TOTAL</td>
            <td class="p-6"></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cartItem in cart" :key="cartItem.product_id" class="border border-gray4 text-center">
            <td class="p-6 flex items-center gap-4">
              <div class="w-[120px] h-[120px] flex items-center overflow-clip">
                <img :src="cartItem?.product?.image" :alt="cartItem?.product?.name"
                  class="object-cover w-full h-full" />
              </div>
              <p>{{ cartItem?.product?.name }}</p>
            </td>
            <td class="p-6 font-[500]">$ {{ cartItem?.product?.price }}</td>
            <td class="p-6">
              <div class="flex items-center justify-center gap-2">
                <v-icon name="co-plus" class="cursor-pointer"
                  @click="updateQuantity(cartItem.id, cartItem.quantity + 1)"></v-icon>
                <InputDiv v-model="cartItem.quantity" moreStylings="text-center w-[50px]" />
                <v-icon name="px-minus" class="cursor-pointer"
                  @click="updateQuantity(cartItem.id, cartItem.quantity - 1)"></v-icon>
              </div>
            </td>
            <td class="p-6 font-[500]">$ {{ cartItem?.product?.price * cartItem?.quantity }}</td>
            <td class="p-6">
              <div class="border-2 border-gray4 transition-all flex items-center w-full h-[60px] min-w-[60px] hover:border-tomatoRed cursor-pointer group"
                @click="handleRemoveProductFromCart(cartItem.id)">
                <v-icon name="io-close-sharp" class="text-gray4 group-hover:text-tomatoRed w-full"></v-icon>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="block lg:hidden">
        <div v-for="cartItem in cart" :key="cartItem.product_id">
          <div class="border py-10 px-6 border-gray4">
            <div class="relative">
              <v-icon name="md-close-sharp" class="absolute text-[8px] -right-[16px] -top-[28px] text-gray" @click="handleRemoveProductFromCart(cartItem.id)"></v-icon>
              <div class="h-[500px] sm:h-[700px]">
                <img :src="cartItem?.product?.image" :alt="cartItem?.product?.name" class="h-full w-full object-cover"/>
              </div>
              <div class="text-center py-5">
                <p>{{ cartItem?.product?.name }}</p>
                <p class="pt-2">$ {{ cartItem?.product?.price }}</p>
                <div class="p-3">
                  <div class="flex items-center justify-center gap-2">
                    <v-icon name="co-plus" class="cursor-pointer"
                      @click="updateQuantity(cartItem.id, cartItem.quantity + 1)"></v-icon>
                      <div class="w-[80px]">
                        <InputDiv v-model="cartItem.quantity" moreStylings="text-center" />
                      </div>
                    <v-icon name="px-minus" class="cursor-pointer"
                      @click="updateQuantity(cartItem.id, cartItem.quantity - 1)"></v-icon>
                  </div>
                </div>
                <p class="font-semibold">$ {{ cartItem?.product?.price * cartItem?.quantity }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between py-8 border-gray3 border-b flex-col lg:flex-row">
        <div class="flex items-center gap-[40px] w-full flex-col md:flex-row lg:w-[70%] py-4">
          <div class="w-full md:w-[50%]">
            <InputDiv placeholder="Enter your coupon code" />
          </div>
          <ButtonDiv name="APPLY COUPON" class="w-fit"/>
        </div>
        <div><ButtonDiv name="CLEAR CART"/></div>
      </div>
      <div class="py-8 mt-8 flex justify-end">
        <div class="bg-gray2 w-full max-w-[500px] px-8 py-6">
          <p class="text-[22px] px-2">Cart Totals</p>
          <div class="flex flex-col space-y-[20px] py-4 cart_total">
            <p><span>SUBTOTAL: </span> <b>$ {{ calculateCartTotal }}</b></p>
            <p><span>TOTAL: </span> <b class="text-[24px]">$ {{ calculateCartTotal }}</b></p>
          </div>
          <div class="flex justify-end">
            <ButtonDiv name="PROCEED TO CHECKOUT" moreStylings="text-[14px] w-fit min-h-[50px]"/>
          </div>
        </div>
      </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue';
import BannerView from '@/components/Reuseables/BannerView.vue';
import ButtonDiv from '@/components/Reuseables/ButtonDiv.vue';
import { useCartStore } from '@/store/cart';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import InputDiv from '@/components/Reuseables/InputDiv.vue';
import { updateProductInCart } from '@/functions/CartProviders';
export default {
  components: {
    LayoutView,
    BannerView,
    ButtonDiv,
    InputDiv
  },
  setup() {
    const cartStore = useCartStore();
    const { cart } = storeToRefs(cartStore);
    const quantity = ref('')

    const updateQuantity = async (productId, quantity) => {
      const res = await updateProductInCart({
        data: { quantity },
        id: productId
      })
      if (res?.data?.data?.quantity) {
        cart.value = cart.value.map((cartItem) => cartItem.id === productId ? { ...cartItem, quantity: res.data.data.quantity } : cartItem)
      }
    }

    const handleRemoveProductFromCart = async (cartId) => {
      const res = await cartStore.removeProductsFromCart(cartId)
      if (res?.status === 'success') {
        cartStore.getAllProductsInCart()
      }
    }

    // onMounted(()=>{
    //   console.log(cart)
    // })

    const calculateCartTotal = computed(()=>cart.value.reduce((total, product)=> total + (+product.product.price * product.quantity),0));

    return {
      cart,
      updateQuantity,
      quantity,
      handleRemoveProductFromCart,
      calculateCartTotal
    }
  }
}
</script>

<style>
.cart_total p{
  padding: 10px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
