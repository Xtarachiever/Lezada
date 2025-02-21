<template>
  <LayoutView>
    <div >
      <div class="slider relative" @mousedown="startDrag" @mouseup="endDrag" @mouseleave="endDrag" @mousemove="onDrag">
        <div>
          <v-icon name="md-arrowbackiosnew"
            class="absolute transition-all left-[15px] sm:left-[30px] -translate-y-[50%] top-[45%] text-gray2 hover:text-lightBlack cursor-pointer z-[2]"
            scale="2.8" @click="handleSlideFunctionality('decrement')"></v-icon>
          <v-icon name="md-arrowforwardios"
            class="absolute transition-all right-[15px] sm:right-[30px] -translate-y-[50%] top-[45%] text-gray2 hover:text-lightBlack cursor-pointer z-[2]"
            scale="2.8" @click="handleSlideFunctionality('increment')"></v-icon>
        </div>
        <div v-for="eachSlider in sliderDetails" :key="eachSlider.title" v-show="eachSlider.image === defaultSlide" class="home_div" >
          <CarouselDiv :image="eachSlider.image" :description="eachSlider.description" :title="eachSlider.title" :currentTranslate="currentTranslate"/>
        </div>
      </div>
      <div class="m-auto home_div">
        <div class=" py-16">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px]">
            <HoverProductCard newProduct />
            <HoverProductCard newProduct sales />
            <HoverProductCard newProduct sales />
            <HoverProductCard sales out />
            <HoverProductCard newProduct />
            <HoverProductCard newProduct sales />
            <HoverProductCard out sales />
            <HoverProductCard sales />
          </div>
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
import { reactive, ref } from 'vue';
import HoverProductCard from '@/components/Reuseables/HoverProductCard.vue';
export default {
  components: { LayoutView, CarouselDiv, HoverProductCard },

  setup() {
    const isDragging = ref(false);
    const startX = ref(0);
    const currentTranslate = ref(0);
    const prevTranslate = ref(0)

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

    const startDrag = (event) =>{
      isDragging.value = true;
      startX.value = event.pageX
      prevTranslate.value = currentTranslate.value
    }

    const onDrag = (event)=> {
      if (!isDragging.value) return;
      const diff = event.pageX - startX.value;
      currentTranslate.value = prevTranslate.value + diff;
    }

    const endDrag = () => {
      isDragging.value = false;
    }

    return {
      defaultSlide,
      handleSlideFunctionality,
      sliderDetails,
      startDrag,
      endDrag,
      onDrag,
      currentTranslate
    }
  }
}
</script>

<style>
.home_div{
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

.slider{
  transition: transform 0.3s ease;
}
@media screen and (max-width:1190px) {
  .home_div{
  width: 90%;
}
}

</style>
