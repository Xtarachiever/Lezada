<template>
  <div>
    <div v-if="isLoading" class="loader m-auto py-10 my-10"></div>
    <div v-else-if="!isLoading && allProductData && allProductData?.data?.length > 0" class="grid gap-[30px]"
      :class="layoutView === 'smallGrid' ? 'sm:grid-cols-2 lg:grid-cols-4' : layoutView === 'largeGrid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'">
      <div v-for="product in allProductData?.data" :key="product.id" class="w-full">
        <HoverProductCard newProduct :name="product.name" :originalPrice="product.price"
          :hover-image="product.hover_image" :image="product.image" :productId="String(product.id)"
          :router-custom-styling="layoutView === 'list' ? 'w-[50%] ' : ''"
          :description="product.description"
          :custom-styling="layoutView === 'list' ? 'h-[400px]' : 'h-[400px] md:h-[200px]'" :layout-view="layoutView" />
      </div>
    </div>
    <div v-else>No Product Found</div>
  </div>
</template>

<script>
import HoverProductCard from '../Reuseables/HoverProductCard.vue';
import { useProductStore } from '@/store/products';
import { storeToRefs } from 'pinia';
import { computed, onMounted, reactive, watch } from 'vue';

export default {
  components: {
    HoverProductCard
  },
  props: ['layoutView'],
  setup() {
    const productStore = useProductStore();
    const { products, isLoading } = storeToRefs(productStore);

    const allProductData = computed(() => products.value?.data?.data || []);

    watch(
      () => products.value,
      () => {
        allProductData
      },
      { deep: true }
    );

    console.log(allProductData.value?.data)

    onMounted(async () => {
      await productStore.getProducts();
    });

    return {
      products,
      isLoading,
      allProductData
    }
  }
}
</script>

<style></style>
