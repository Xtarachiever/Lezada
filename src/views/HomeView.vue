<template>
  <LayoutView>
    <div class="slider relative">
      <div>
        <v-icon name="md-arrowbackiosnew" class="absolute transition-all left-[30px] -translate-y-[50%] top-[50%] text-gray2 hover:text-lightBlack cursor-pointer z-[2]" scale="2.8" @click="handleSlideFunctionality('decrement')"></v-icon>
        <v-icon name="md-arrowforwardios" class="absolute transition-all right-[30px] -translate-y-[50%] top-[50%] text-gray2 hover:text-lightBlack cursor-pointer z-[2]" scale="2.8" @click="handleSlideFunctionality('increment')"></v-icon>
      </div>
      <div v-for="eachSlider in sliderDetails" :key="eachSlider.title" v-show="eachSlider.image === defaultSlide">
        <CarouselDiv :image="eachSlider.image" :description="eachSlider.description" :title="eachSlider.title"/>
      </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue'
import CarouselDiv from '@/components/Reuseables/CarouselDiv.vue';
import { reactive, ref } from 'vue';
export default {
  components: { LayoutView, CarouselDiv },

  setup(){
    const sliderDetails = reactive([
      {image:'/carousel-1.jpg', description:"Bottle Grinder, Small, 2-Piece", title:"Accessories" },
      {image:'/carousel-2.jpg',  description:"Large, Food board", title:"Handmade" },
      {image:'/carousel-3.jpg',  description:"Tribeca Hubert, Pendant", title:"Accessories" },
    ])

    let defaultSlide = ref(sliderDetails[0]?.image)

    const handleSlideFunctionality = (value) =>{

      let i = sliderDetails.findIndex((value)=>value.image === defaultSlide.value)
        if(value === 'increment'){
          i = (i+1) % sliderDetails.length
        }else{
          i = i > 0 ? i-1 : sliderDetails.length - 1
        }
        defaultSlide.value = sliderDetails[i].image
    }
    return{
      defaultSlide,
      handleSlideFunctionality,
      sliderDetails
    }
  }
}
</script>

<style></style>
