<template>
  <div class="bg-white h-full absolute right-0 py-6 px-5" :class="fullWidth ? 'w-full' : 'w-[360px]'">
    <div class="flex justify-between border-b border-lightGray pb-2 items-center">
      <p class="font-[500] text-[18px]">{{ handleComputedCapitalizedText }}</p>
      <v-icon name="io-close-sharp" scale="0.9" v-on:click="handleActivatorClicks(name)" class="close-icon cursor-pointer"></v-icon>
    </div>
    <div v-if="name === 'wishlist'">
      <WishLists />
    </div>
  </div>
</template>

<script>

import { computed } from 'vue';
import WishLists from '../WishLists.vue';
export default {
  components:{WishLists},
  props:{
    name:{
      type: String,
      required:true
    },
    handleActivatorClicks: {
      type: Function,
    },
    fullWidth:{
      type: Boolean
    }
  },
  setup(props){
    const handleComputedCapitalizedText = computed(()=>
      props.name.charAt(0).toUpperCase() + props.name.slice(1)
    )

    return{
      handleComputedCapitalizedText
    }
  }
}
</script>

<style></style>
