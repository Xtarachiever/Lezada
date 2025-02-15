<template>
  <div class="relative pb-10">
    <img :src="image" alt="banner" class="w-full m-auto h-full object-contain object-top"/>
    <div class="absolute left-[15%] top-[50%] -translate-y-[50%] space-y-[10px]">
      <p class="text-blue font-[550] text-[17px] tracking-[4px]">{{ title.toUpperCase() }}</p>
      <p class="description text-[28px] max-w-[200px] md:text-[40px] md:max-w-[350px] font-[550]">{{ description }}</p>
      <div class="md:pt-8">
        <ButtonDiv name="SHOP NOW" :moreStylings="['text-[14px] sm:h-[50px] px-6 sm:w-[180px] transition-all hover:border hover:bg-transparent hover:text-lightBlack']"/>
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
