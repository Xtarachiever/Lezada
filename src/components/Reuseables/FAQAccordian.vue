<template>
  <div>
    <p class="text-[32px]">{{ title }}</p>
      <div v-for="(info, index) in data" :key="info" @click="handleAccordian(index)" class="px-8 py-1">
        <p class="text-xl py-3 cursor-pointer text-[26px]">{{ info.title }}</p>
        <div v-show="activeAccordian === index" class="text-gray1">
          {{ info.description }}
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props:{
    title:{
      type:String
    },
    data:{
      type: Array
    },
  },
  setup(){
    const activeAccordian = ref(0);

    const handleAccordian = (activeIndex) =>{
      activeAccordian.value = activeIndex
    }

    return{
      handleAccordian,
      activeAccordian
    }
  }
}
</script>

<style>

</style>
