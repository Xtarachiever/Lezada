<template>
  <div class=" relative card_div h-full overflow-hidden" @mouseover="handleHoverEffect" @mouseout="handleMouseOutEffect">
    <div class="absolute top-[20px] left-[30px] space-y-[10px] z-[1]">
      <p v-if="sales" class="sales text-sm">-10%</p>
      <p v-if="newProduct" class="new text-sm">new</p>
      <p v-if="out" class="out-of-sale text-sm">out</p>
    </div>
    <div class="">
      <RouterLink :to="{name:'ProductView',params: {'productName': name}, query:{'productId': productId}}" class="w-full flex gap-[40px] h-[80%]">
        <div class="bg-gray1 relative w-full h-[400px]">
          <img :src="currentImage" alt="Product" class="w-full h-full object-cover" />
          <div class="absolute right-[20px] top-[25px] space-y-[10px] functionalities">
            <v-icon name="hi-heart"></v-icon>
            <img src="/compare.svg" alt="compare" class="w-[20px] " />
            <v-icon name="io-search"></v-icon>
          </div>
        </div>
      </RouterLink>
      <div v-show="layoutView === 'list'" class="w-[60%] pt-4">
        <p class="text-[23px]">Lorem ipsum, dolor sit amet</p>
        <div class="pt-2">
          <span class="original-price"
            :class="sales ? 'line-through text-xs text-gray' : 'text-black font-[550]'">$20.00</span>
          <span v-if="sales" class="sales-price text-black font-[550] pl-2">$17.60</span>
        </div>
        <p class="py-4">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
      </div>
    </div>
    <div class="pt-4">
      <div class="h-[36px] relative flex items-center" v-show="layoutView !== 'list'">
        <p v-if="hoveringCard" class="text-tomatoRed flex items-center gap-[5px] absolute inset-0">
          <v-icon name="md-add-round"></v-icon>
          <span v-if="sales && out">Out of Stock</span>
          <span v-else-if="sales" @click="handleAddToCart">Buy Now</span>
          <span v-else @click="!isProductAdded ? handleAddToCart() : null">
            {{ isProductAdded ? 'Added to cart' : 'Add to cart' }}
          </span>
        </p>
        <p v-else class="absolute inset-0 flex items-center pt-2">{{truncateText(name,20)}}
        </p>
      </div>

      <div class="pt-2" v-show="layoutView !== 'list'">
        <span class="original-price"
          :class="sales ? 'line-through text-xs text-gray' : 'text-black font-[550]'">$ {{ originalPrice }}</span>
        <span v-if="sales" class="sales-price text-black font-[550] pl-2">$17.60</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/store/cart';
import { storeToRefs } from 'pinia';
import { computed, onMounted, reactive, ref, watch } from 'vue';
export default {
  props: {
    sales: Boolean,
    out: Boolean,
    newProduct: Boolean,
    layoutView:String,
    name:String,
    originalPrice: String,
    salesPrice: String,
    image: String,
    productId: String,
    hoverImage: String,
  },

  setup(props) {
    const hoveringCard = ref(false);
    const cartStore = useCartStore();
    const { cart } = storeToRefs(cartStore);
    // const productAdded = ref({})
    const currentImage = ref('');

    // Methods
    const handleHoverEffect = () => {
      hoveringCard.value = true;
    }

    const handleMouseOutEffect = () => {
      hoveringCard.value = false
    }

    const handleImageHovering = () =>{
      currentImage.value = hoveringCard.value ? props.hoverImage : props.image
    }

    watch(()=> hoveringCard.value,
    () => handleImageHovering())

    const isProductAdded = computed(()=> cart.value.some(cartItem => cartItem.product_id == props.productId))

    onMounted(()=>{
      handleImageHovering()
    });

    const handleAddToCart = async () =>{
      await cartStore.addProductsToCart({
        product_id: props.productId,
        quantity:1
      });
      // productsAddedToCart()
    }

    return {
      handleHoverEffect,
      hoveringCard,
      handleMouseOutEffect,
      handleAddToCart,
      isProductAdded,
      currentImage
    }
  }
}
</script>

<style>
.card_div {
  transition: all .3s ease-in-out;
  cursor: pointer;
}

.functionalities {
  display: none;
}

.functionalities img,
.functionalities svg {
  background: white;
  width: 35px;
  height: 35px;
  padding: 8px;
  color: rgb(126, 126, 126);
}

.card_div:hover .functionalities {
  display: block;
}

.sales,
.new,
.out-of-sale {
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50px;
}

.new {
  background-color: #c61932;
}

.sales {
  background-color: #98d8ca;
}
.out-of-sale{
  background-color: #333;
}
</style>
