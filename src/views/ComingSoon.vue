<template>
  <div class="bg-[url('/coming-soon-bg.png')] h-[100vh] pl-[40px] pt-[40px]">
    <RouterLink to="/">
      <img src="/logo.png" alt="Logo"/>
    </RouterLink>
    <div class="absolute top-[50%] -translate-y-[50%] left-[10%]">
      <p class="text-[22px] text-gray1">784 Kris Estate Suite 112</p>
      <p class="text-[60px] text-lightBlack">Website coming soon</p>
      <div class="relative">
        <InputDiv placeholder="Your email address"/>
        <span class="text-[14px] absolute right-0 top-[20px] text-gray1">SUBSCRIBE</span>
      </div>
    </div>
  </div>
</template>

<script>
import InputDiv from '@/components/Reuseables/InputDiv.vue';
export default {
  components:{
    InputDiv
  }
}
</script>

<style>

</style>
