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
        <div class=" py-16" v-else-if="allProductData[0]?.data.length > 0">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] justify-items-center items-stretch">
            <div v-for="product in allProductData[0]?.data" :key="product.id" class="w-full">
              <HoverProductCard newProduct :name="product.name" :originalPrice="product.price" :hover-image="product.hover_image" :image="product.image" :productId="String(product.id)"/>
            </div>
            <!-- <HoverProductCard newProduct sales /> -->
          </div>
        </div>
        <div v-else>No Data Found</div>
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

export default {
  components: { LayoutView, CarouselDiv, HoverProductCard, Splide, SplideSlide },

  setup() {
    // Sliders
    const sliderRef = ref(null);
    const allProductData = reactive([]);

    const productStore = useProductStore()

    const { products, isLoading} = storeToRefs(productStore)

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

    const getAllProducts = async () =>{
      try{
        // const res = await fetchAllProducts()
        const response = products?.value?.data
        if(response){
          if(response?.status === "success"){
            // toast.success(response?.data)
            allProductData.push(response?.data)
            // console.log(allProductData)
          }
        }
      }catch(err){
        console.log(err)
      }
    }

    onMounted(()=>getAllProducts);

    watch(
      () => productStore.products,
      () => {
        getAllProducts();
      },
      { deep: true }
    );

    productStore.getProducts();


    return {
      defaultSlide,
      handleSlideFunctionality,
      sliderDetails,
      sliderRef,
      goToSlide,
      allProductData,
      isLoading
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
