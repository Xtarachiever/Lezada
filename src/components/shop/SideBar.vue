<template>
  <div>
    <div class="">
      <div class="w-full">
        <InputDiv placeholder="Search products..." iconName="io-search" />
      </div>
      <div>
        <p class="text-lg py-1 py-3" >Categories</p>
        <div>
          <!-- <p class="underline">All Categories</p> -->
          <ul class="text-md text-gray1 flex flex-col space-y-[12px] filter_list">
            <li @click="handleCategoryPick('')" :class="category === '' ? 'underline' : ''">All Categories</li>
            <li v-for="c in categories"  :class="category === c ? 'underline' : ''" :key="c" @click="handleCategoryPick(c)">{{ c }}</li>
          </ul>
        </div>
        <div class="py-4">
          <p class="text-lg py-1 py-3" >Popular products</p>
          <div class="flex flex-col gap-[25px]">
            <div v-for="topProducts in topThreeProducts" :key="topProducts" class="p-2">
              <router-link :to="{name:'ProductView',params: {'productName': topProducts.name}, query:{'productId': topProducts.id}}" class="flex gap-[20px] cursor-pointer">
                <img :src="topProducts.image" :alt="topProducts.name" class="w-[100px] h-[120px] object-cover"/>
                <div class="flex flex-col gap-[6px]">
                  <span class="text-gray1 text-xs max-w-[100px]">{{ topProducts.name }}</span>
                  <span class="text-[13px]">{{ topProducts.price }}</span>
                  <span class="text-[13px]">Stock: {{ topProducts.stock }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import InputDiv from '../Reuseables/InputDiv.vue';
export default {
  components: {
    InputDiv,
  },
  props: ['category','categories','allProductData'],
  emits: ['update:category'],
  setup(props, { emit }) {
    // const categories = reactive(["Decor", "Fashion", "Men", "Women", "Cosmestics", "Furniture", "Perfumes", "Wearables", "Jewelry", "Swimsuit"]);
    const handleCategoryPick = (category) => {
      emit('update:category', category);
    }

    const topThreeProducts = computed(()=> props.allProductData?.data?.slice(0,3))


    return {
      handleCategoryPick,
      topThreeProducts,
    }
  }
}
</script>

<style>
.filter_list li {
  font-size: 14px;
}

.filter_list li:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
