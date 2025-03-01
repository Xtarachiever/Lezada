<template>
  <div class="w-full cursor-pointer">
    <select :class="stylishSelect ? 'border-b pb-2 text-gray1' : 'border'" class="w-full border-gray1 outline-none">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props:['options','stylishSelect']
}
</script>

<style>
</style>
