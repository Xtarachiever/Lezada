<template>
  <div class="w-full">
    <select class="w-full border border-gray1 outline-none">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props:['options']
}
</script>

<style>
</style>
