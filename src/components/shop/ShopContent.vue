<template>
  <div>
    <div class="grid gap-[20px]" :class="layoutView === 'smallGrid' ? 'grid-cols-4' : layoutView === 'largeGrid' ? 'grid-cols-3' : 'grid-cols-1'">
      <HoverProductCard :out="true" :layoutView="layoutView"/>
      <HoverProductCard :new-product="true" :sales="true" :layoutView="layoutView"/>
      <HoverProductCard :out="true" :layoutView="layoutView"/>
      <HoverProductCard :out="true" :sales="true" :layoutView="layoutView"/>
      <HoverProductCard :new-product="true" :out="true" :layoutView="layoutView"/>
      <HoverProductCard :out="true" :layoutView="layoutView"/>
      <HoverProductCard :sales="true" :layoutView="layoutView"/>
      <HoverProductCard :new-product="true" :out="true" :layoutView="layoutView"/>
      <HoverProductCard :out="true" :layoutView="layoutView"/>
      <HoverProductCard :sales="true" :layoutView="layoutView"/>
    </div>
  </div>
</template>

<script>
import HoverProductCard from '../Reuseables/HoverProductCard.vue';

export default {
  components:{
    HoverProductCard
  },
  props:['layoutView'],
  setup(){
  }
}
</script>

<style>

</style>
