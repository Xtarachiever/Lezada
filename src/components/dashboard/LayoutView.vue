<template>
  <div>
    <div class="fixed top-[0px] w-full z-[2] bg-gray2">
      <NavBar />
    </div>
    <div class="top-[0px] fixed w-full h-full bg-transparentBg z-[10]">
      <SideBar />
    </div>
    <div class="min-h-[50vh] mt-[80px]">
      <slot />
    </div>
    <FooterView />
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import FooterView from './FooterView.vue'
import SideBar from './SideBar.vue'
export default {
  components: { NavBar, FooterView, SideBar },
}
</script>

<style></style>
