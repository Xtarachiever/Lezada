<template>
  <div class="relative h-[70vh] pb-10">
    <img :src="image" alt="banner" class="w-[80%] m-auto h-full object-cover"/>
    <div class="absolute left-[15%] top-[50%] -translate-y-[50%] space-y-[10px]">
      <p class="text-blue font-[550] text-[17px] tracking-[4px]">{{ title.toUpperCase() }}</p>
      <p class="description text-[40px] max-w-[350px] font-[550]">{{ description }}</p>
      <div class="pt-8">
        <ButtonDiv name="SHOP NOW" :moreStylings="['text-[14px] h-[50px] px-6 w-[180px] transition-all hover:border hover:bg-transparent hover:text-lightBlack']"/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDiv from './ButtonDiv.vue';
export default {
  props:["image","title","description"],
  components:{ ButtonDiv }
}
</script>

<style>

</style>
