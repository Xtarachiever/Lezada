<template>
    <div class="bg-[url('/register-banner.jpg')] h-[220px] pt-4 px-5">
      <div class="max-w-[1200px] m-auto w-[80%] lg:w-full">

        <div v-for="detail in bannerDetails" :key="detail.label">
          <p class="mt-[50px] text-[45px]">{{ detail.header }}</p>
          <span class="text-[15px] text-gray1">{{ detail.label[0]+  " "  + '/' }}</span>  {{"  "}}
          <span class="text-[15px]">{{ detail.label[1] }}</span>
        </div>
      </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props:['name','details'],
  setup(props){
    const bannerDetails = computed(()=>{
      const link = props.details.split('/')
      const header = link[1].charAt(0).toUpperCase() + link[1].slice(1)
      const label = link.map((segment)=>segment.charAt(0).toUpperCase() + segment.slice(1))
      return [{
        label,
        header
      }]
    })

    return{
      bannerDetails,
    }
  }
}
</script>

<style>

</style>
