<template>
  <LayoutView>
    <div>
      <div class="relative z-[1]">
        <Splide ref="sliderRef" :options="{
          type: 'loop', perPage: 1, gap: '8rem', padding: { left: '15%', right: '15%' }, arrows: false,
          breakpoints: {
            1024: {
              gap: '2rem',
              padding: { left: '0px', right: '0px' }
            }
          }
        }" class="relative">
          <SplideSlide v-for="eachSlider in sliderDetails" :key="eachSlider.title">
            <CarouselDiv :image="eachSlider.image" :description="eachSlider.description" :title="eachSlider.title" />
          </SplideSlide>
        </Splide>
        <v-icon name="md-arrowbackiosnew"
          class="absolute transition-all left-[30px] lg:left-[10%] -translate-y-[50%] top-[45%] text-gray2 hover:text-lightBlack cursor-pointer z-[2]"
          scale="2.8" @click="goToSlide('prev')"></v-icon>
        <v-icon name="md-arrowforwardios"
          class="absolute transition-all right-[30px] lg:right-[10%] -translate-y-[50%] top-[45%] text-gray2 hover:text-lightBlack cursor-pointer z-[2]"
          scale="2.8" @click="goToSlide('next')"></v-icon>
      </div>
      <div class="m-auto home_div">
        <div v-if="isLoading" class="loader h-[40vh] m-auto mt-10 pt-10"></div>
        <div class=" py-16" v-else-if="allProductData && allProductData?.length > 0">
          <div class="flex items-center justify-center gap-[40px] text-[40px] pb-10 categories">
            <span :class="activeCategory === 'New' ? 'text-black' : 'text-[#ccc]'" @click="handleActiveCategories('New')">New</span>
            <span :class="activeCategory === 'Popular' ? 'text-black' : 'text-[#ccc]'" @click="handleActiveCategories('Popular')">Popular</span>
            <span :class="activeCategory === 'Sale' ? 'text-black' : 'text-[#ccc]'" @click="handleActiveCategories('Sale')">Sale</span>
          </div>
          <div v-if="activeCategory === 'Popular'" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] justify-items-center items-stretch">
            <div v-for="product in allProductData" :key="product.id" class="w-full">
              <HoverProductCard :popular="true" :name="product.name" :originalPrice="product.price" :hover-image="product.hover_image" :image="product.image" :productId="String(product.id)"/>
            </div>
          </div>
          <div v-else-if="activeCategory === 'New'" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] justify-items-center items-stretch">
            <div v-for="product in allNewProductData" :key="product.id" class="w-full">
              <HoverProductCard newProduct :name="product.name" :originalPrice="product.price" :hover-image="product.hover_image" :image="product.image" :productId="String(product.id)"/>
            </div>
          </div>
          <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] justify-items-center items-stretch">
            <div v-for="product in allSalesProductData" :key="product.id" class="w-full">
              <HoverProductCard :sales="true" :name="product.name" :originalPrice="product.price" :hover-image="product.hover_image" :image="product.image" :productId="String(product.id)"/>
            </div>
          </div>
          <div class="w-full m-auto py-10">
            <Pagination :details="paginationDetails" :defined-max-visible="activeCategory === 'Popular' ? maxVisible : 2" @page-change="getAllProducts" v-model:currentPage="currentPage"/>
          </div>
        </div>
        <div v-else class="m-auto w-full flex-col flex items-center w-[400px] py-10 my-10">
          <img src="../assets/error.png" alt="empty" class="w-full h-full"/>
          <p class="text-xl font-semibold">No Data found</p>
        </div>
        <div class="text-center space-y-[30px]">
          <img src="/cabinet.jpg" alt="cabinet" class="w-full max-w-[800px] m-auto" />
          <div class="tags text-gray1 flex items-center justify-center gap-[20px] text-md cursor-pointer">
            <p>#summer</p>
            <p>#shelf</p>
            <p>#sale</p>
          </div>
          <div class="text-4xl py-6">
            Up To 40% Off Final Sale Items. <br />Caught in the moment!
          </div>
        </div>
      </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue'
import CarouselDiv from '@/components/Reuseables/CarouselDiv.vue';
import { onMounted, reactive, ref, watch } from 'vue';
import HoverProductCard from '@/components/Reuseables/HoverProductCard.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { useProductStore } from '@/store/products';
import { storeToRefs } from 'pinia';
import Pagination from '@/components/Reuseables/Pagination.vue';

export default {
  components: { LayoutView, CarouselDiv, HoverProductCard, Splide, SplideSlide, Pagination },

  setup() {
    // Sliders
    const sliderRef = ref(null);
    const allProductData = ref([]);
    const allNewProductData = ref([]);
    const allSalesProductData = ref([]);
    const per_page = ref(20);
    const paginationDetails = ref([]);
    const currentPage = ref(1);
    const activeCategory = ref('Popular');
    const maxVisible = ref(5);
    const pageToFetch = ref(20)

    const productStore = useProductStore()

    const { isLoading} = storeToRefs(productStore)

    const sliderDetails = reactive([
      { image: '/carousel-1.jpg', description: "Bottle Grinder, Small, 2-Piece", title: "Accessories" },
      { image: '/carousel-2.jpg', description: "Large, Food board", title: "Handmade" },
      { image: '/carousel-3.jpg', description: "Tribeca Hubert, Pendant", title: "Accessories" },
    ])

    let defaultSlide = ref(sliderDetails[0]?.image)

    const handleSlideFunctionality = (value) => {

      let i = sliderDetails.findIndex((value) => value.image === defaultSlide.value)
      if (value === 'increment') {
        i = (i + 1) % sliderDetails.length
      } else {
        i = i > 0 ? i - 1 : sliderDetails.length - 1
      }
      defaultSlide.value = sliderDetails[i].image
    }

    const goToSlide = (direction) => {
      if (direction === 'next') {
        sliderRef.value.splide.go('>')
      } else {
        sliderRef.value.splide.go("<");
      }
    }

    const getAllProducts = async (page = currentPage.value) =>{
      try{
        await productStore.getProducts({ page: page, per_page: pageToFetch.value });
        const response = productStore.products?.data;
        if (response?.status === 'success') {
          allProductData.value = response.data.data
          allNewProductData.value = response.data.data.slice(0, 5);
          allSalesProductData.value = response.data.data.slice(10,20)

          paginationDetails.value = activeCategory?.value === 'Popular' ?
          {
            last_page: response.data.last_page,
            total: response.data.total,
            per_page: response.data.per_page,
            currentPage: response.data.current_page
          }
          :
          paginationDetails.value = {
          last_page: 10,
          total: 10,
          per_page: 5,
          currentPage: 1
          }

          currentPage.value = response.data.current_page;
        }
      }catch(err){
        console.log(err)
      }
    }

    watch(()=> activeCategory?.value,
    ()=>{
      per_page.value = 20
      if(activeCategory.value !== 'Popular'){
        paginationDetails.value = {
          last_page: 10,
          total: 10,
          per_page: 5,
          currentPage: 1
        }
      }
        getAllProducts()
      }
    )

    const handleActiveCategories = (name) =>{
      activeCategory.value = name
    }

    onMounted(() => getAllProducts());

    return {
      defaultSlide,
      handleSlideFunctionality,
      sliderDetails,
      sliderRef,
      goToSlide,
      allProductData,
      isLoading,
      paginationDetails,
      getAllProducts,
      currentPage,
      activeCategory,
      handleActiveCategories,
      allSalesProductData,
      allNewProductData,
      maxVisible
    }
  }
}
</script>

<style>
.home_div {
  width: 100%;
  margin: auto;
  max-width: 1200px;
  padding: 0px 20px;
}

.categories span{
  cursor: pointer;
}
.categories span:hover{
  color: black;
  transition: all .5s ease-in-out;
}
.tags p {
  transition: all .3s ease-in;
}

.tags p:hover {
  text-decoration: underline;
}

.slider {
  transition: transform 0.3s ease;
}

/* slider styles */
.splide {
  max-width: 100%;
  background: inherit;
}

.splide__slide img {
  width: 100%;
  height: 100%;
}

.splide__pagination {
  display: none !important;
}

.splide__track .splide__list li {
  max-width: 2200px;
  width: 100%;
}

.splide__track .splide__list li.is-active {
  position: relative;
}

.splide__track .splide__list li {
  position: unset;
}

.splide__slide {
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.splide__slide.is-active {
  opacity: 1;
}

@media screen and (max-width:1190px) {
  .home_div {
    width: 90%;
  }
}
</style>
