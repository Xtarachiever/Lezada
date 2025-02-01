<template>
  <div class="flex items-center gap-[30px] justify-between px-28 lg:px-8 py-6 shadow-md">
    <div class="flex items-center gap-[10px] w-[150px] lg:w-[200px]">
      <v-icon name="pr-bars" scale="2" class="text-lightBlack largeScreenOnly"></v-icon>
      <img src="/logo.png" alt="Lezada" class="w-[100px] lg:w-[150px]" />
    </div>
    <div class="gap-[10px] navlinks justify-between text-gray">
      <div v-for="navLink in navLinksContent" :key="navLink">
        <div class="flex items-center gap-[2px]">
          <p>{{ navLink.name }}</p>
          <v-icon name="md-keyboardarrowdown-round"></v-icon>
        </div>
      </div>
    </div>
    <div class="flex gap-[30px] items-center text-lightBlack">
      <v-icon name="io-search" class="largeScreenOnly"></v-icon>
      <v-icon name="fa-user-alt" class="largeScreenOnly"></v-icon>
      <v-icon name="hi-heart"></v-icon>
      <v-icon name="md-shoppingcart-round"></v-icon>
      <v-icon name="pr-bars" scale="1.5" class="text-lightBlack smallScreenOnly"></v-icon>
    </div>
  </div>
</template>

<script>
import NavLinks from './NavLinks.json'
export default {
  setup() {
    const navLinksContent = NavLinks

    return {
      navLinksContent,
    }
  },
}
</script>

<style scoped>
.navlinks {
  width: 45%;
  display: flex;
  max-width: 600px;
  @media screen and (max-width: 1170px) {
    width: 50%;
  }
  @media screen and (max-width: 990px) {
    display: none;
  }
}
.largeScreenOnly {
  @media screen and (max-width: 990px) {
    display: none;
  }
}
.smallScreenOnly {
  @media screen and (min-width: 991px) {
    display: none;
  }
}
</style>
