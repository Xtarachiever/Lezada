<template>
  <div class="bg-white h-full absolute right-0" :class="fullWidth ? 'w-full' : 'w-[360px]'">
    <div v-if="name === 'side_bar'">
      <div class="bg-lightBlack px-4 py-[13.4px] w-fit absolute -left-[61px] top-[0px]">
        <v-icon name="io-close-sharp" class="text-white" scale="1.5" v-on:click="handleActivatorClicks(name)"></v-icon>
      </div>
      <NavigationSideBar />
    </div>
    <div v-else>
      <div class="flex justify-between border-b border-lightGray pb-2 items-center px-6 py-6">
        <p class="font-[500] text-[18px]">{{ handleComputedCapitalizedText }}</p>
        <v-icon name="io-close-sharp" scale="0.9" v-on:click="handleActivatorClicks(name)" class="close-icon cursor-pointer"></v-icon>
      </div>
      <div v-if="name === 'wishlist'">
        <WishLists />
      </div>
    </div>
  </div>
</template>

<script>

import { computed } from 'vue';
import WishLists from '../WishLists.vue';
import NavigationSideBar from './NavigationSideBar.vue';
export default {
  components:{WishLists, NavigationSideBar},
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
