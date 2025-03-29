<template>
  <div class="w-full relative py-2 z-[1]">
    <label v-show="label" :class="[top ? top : '-top-[10px]', capitalize ? 'capitalize' : 'uppercase', classVariant]" class="absolute pointer-events-none text-black text-left">{{ label }}</label>
    <input
      :type="type ? type : 'text'"
      :value="modelValue ? modelValue : ''"
      :class="[variant ? variant : 'borderBottomInput', moreStylings]"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder ? placeholder : ''"
      class="w-full"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
    />

    <v-icon
      v-if="iconName"
      :name="iconName"
      class="text-gray absolute right-0"
      scale="1.5"
    ></v-icon>
    <p class="text-red-500" v-show="errorMsg">{{ errorMsg }}</p>
  </div>
</template>
<!-- (inputFocus || modelValue !== '') ? 'hidden' : 'block', -->
<script>
import { ref } from 'vue';

export default {
  props: ['type', 'modelValue', 'iconName', 'placeholder', 'label','variant','top', 'capitalize', 'classVariant','errorMsg','moreStylings'],
  emits: ['update:modelValue'],
  setup(){
    const inputFocus = ref(false)

    const handleInputFocus = () =>{
      inputFocus.value = true
    }

    const handleInputBlur = () =>{
      inputFocus.value = false
    }

    return{
      handleInputFocus,
      inputFocus,
      handleInputBlur
    }
  }
}


</script>

<style scoped>
.borderBottomInput {
  border-bottom: 2px solid #ccc;
  background: inherit;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 0px;
}
.borderBottomInput:focus,
.borderBottomInput:hover {
  border-bottom: 2px solid black;
  transition: all 0.3s ease-in-out;
}

label::after {
  content: '*';
  display: inline;
  position: relative;
  padding-left: 5px;
  color: red;
}
</style>
