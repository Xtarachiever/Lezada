<template>
  <div class=" h-full absolute right-0 bg-white ">
    <div v-if="name === 'side_bar'" class="relative w-fit cursor-pointer smallScreenOnly">
      <div class="bg-lightBlack px-4 py-[13.4px] w-fit absolute -left-[61px] top-[0px] z-50">
        <v-icon name="io-close-sharp" class="text-white" scale="1.5" v-on:click="handleActivatorClicks(name)"></v-icon>
      </div>
    </div>
    <div v-if="name === 'side_bar'" class="w-[320px] relative h-full overflow-auto smallScreenOnly">
      <NavigationSideBar />
    </div>
    <div v-else class="w-[360px]">
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

<style>
  @media screen and (min-width: 991px) {
    .smallScreenOnly {
      display: none;
    }
  }
</style>
