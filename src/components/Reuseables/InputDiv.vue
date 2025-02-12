<template>
  <div class="w-full relative py-2 z-[1]">
    <label v-show="label" class="text-black uppercase">{{ label }}</label>
    <input
      :type="type ? type : 'text'"
      v-on:change="onChange ? onChange : () => {}"
      :value="value ? value : ''"
      :class="variant ? variant : 'borderBottomInput'"
      :placeholder="placeholder ? placeholder : ''"
    />
    <v-icon
      v-if="iconName"
      :name="iconName"
      class="text-gray absolute right-0"
      scale="1.5"
    ></v-icon>
  </div>
</template>

<script>
export default {
  props: ['type', 'onChange', 'value', 'iconName', 'placeholder', 'label','variant'],
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
