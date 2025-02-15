<template>
  <div class=" relative card_div" @mouseover="handleHoverEffect" @mouseout="handleMouseOutEffect">
    <div class="absolute right-[10px] top-[30px] space-y-[10px] functionalities">
      <v-icon name="hi-heart"></v-icon>
      <img src="/compare.svg" alt="compare" class="w-[20px] " />
      <v-icon name="io-search"></v-icon>
    </div>
    <div class="absolute top-[20px] left-[30px] space-y-[10px]">
      <p v-if="sales" class="sales text-sm">-10%</p>
      <p v-if="newProduct" class="new text-sm">new</p>
      <p v-if="out" class="out-of-sale text-sm">out</p>
    </div>
    <div class="bg-gray1 w-full">
      <img src="/product-1.jpg" alt="Product" class="w-full" />
    </div>
    <div class="pt-4">
      <div class="h-[36px] relative flex items-center">
        <p v-if="hoveringCard" class="text-tomatoRed flex items-center gap-[5px] absolute inset-0">
          <v-icon name="md-add-round"></v-icon>
          <span v-if="sales && out">Out of Stock</span>
          <span v-else-if="sales">Buy Now</span>
          <span v-else>Add to cart</span>
        </p>
        <p v-else class="absolute inset-0 flex items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div class="pt-2">
        <span class="original-price"
          :class="sales ? 'line-through text-xs text-gray' : 'text-black font-[550]'">$20.00</span>
        <span v-if="sales" class="sales-price text-black font-[550] pl-2">$17.60</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    sales: Boolean,
    out: Boolean,
    newProduct: Boolean,
  },

  setup() {
    const hoveringCard = ref(false);

    // Methods
    const handleHoverEffect = () => {
      hoveringCard.value = true
    }

    const handleMouseOutEffect = () => {
      hoveringCard.value = false
    }

    return {
      handleHoverEffect,
      hoveringCard,
      handleMouseOutEffect
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
