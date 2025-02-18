<template>
   <div class="bg-white w-full h-[100vh] absolute right-0 pt-10 py-6 px-4 pr-8">
    <v-icon name="io-close-sharp" scale="3.3"  v-on:click="handleActivatorClicks('search')" class="close-icon cursor-pointer float-right"></v-icon>
    <div class="relative w-[70%] m-auto h-[90vh]">
      <div class="absolute -translate-y-[50%] top-[50%] w-full main_div">
        <InputDiv placeholder="Search Products..." :v-model="inputValue"/>
        <p class="text-gray1 pt-2"># Hit enter to search</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import InputDiv from '../Reuseables/InputDiv.vue';
export default {
  props:{
    handleActivatorClicks:{
      type: Function
    },
  },
  components:{
    InputDiv
  },
  setup(){
    const inputValue = ref('');

    return{
      inputValue
    }
  }
}
</script>

<style>
.main_div input{
  padding: 30px 0px 0px 0px !important;
  font-size: 60px;
  color: #333;
}
.main_div input::placeholder{
  color: #ccc;
}
</style>
