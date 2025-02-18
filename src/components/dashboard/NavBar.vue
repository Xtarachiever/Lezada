<template>
  <div class="relative">
    <div class="flex h-[80px] items-center gap-[30px] justify-between px-28 lg:px-12 shadow-md bg-gray2">
      <div class="flex items-center gap-[10px] w-[150px] lg:w-[200px]">
        <v-icon name="pr-bars" scale="2" class="text-lightBlack largeScreenOnly" v-show="!isHome"></v-icon>
        <img src="/logo.png" alt="Lezada" class="w-[100px] lg:w-[130px]" />
      </div>
      <div class="gap-[10px] navlinks justify-between text-gray h-full"  @mouseleave="activeNavLink = ''">
        <div v-for="navLink in navLinksContent" :key="navLink" class="cursor-pointer h-full items-center flex relative"
          @mouseover="activeNavLinkOnHover(navLink.name, $event)">
          <div class="flex items-center gap-[2px] eachMenuItem" @mouseleave="activeNavLink = ''">
            <p class="font-[500]">{{ navLink.name }}</p>
            <v-icon name="md-keyboardarrowdown-round"></v-icon>
          </div>
        </div>
        <div v-if="menuItems[activeNavLink.toLowerCase()]" v-show="activeNavLink !== ''"
          @mouseleave="activeNavLink = ''" class="absolute bg-white top-[80px] pt-6 shadow-md" :class="{
            'left-[50%] -translate-x-[50%] w-[90%] max-w-[1200px] px-14 ': menuItems[activeNavLink.toLowerCase()].length > 1,
            'pb-6 w-[220px] px-6 ': menuItems[activeNavLink.toLowerCase()].length === 1
          }" :style="menuItems[activeNavLink.toLowerCase()].length === 1 && { left: dropdownPosition.left + 'px', top: dropdownPosition.top + 'px' }">
          <div class="flex justify-between gap-[60px]" v-if="menuItems[activeNavLink.toLowerCase()].length > 1">
            <div v-for="[menuItem, key] in Object.entries(menuItems[activeNavLink.toLowerCase()]).slice(1, -1)"
              :key="menuItem" class="space-y-[15px] pb-8 menuItems w-full">
              <div v-for="(item, index) in key" :key="index" class="relative">
                <router-link :to="item.link">
                  <p :class="index === 0 ? 'font-[500] text-lightBlack' : 'text-gray cursor-pointer'" @mouseover="updateNavLinkSubTitle(item.title)" @mouseleave="navLinkSubTitle = ''">
                    <span>{{ item.title }}</span>
                    <img v-show="navLinkSubTitle === item.title" :src="'/'+navLinkSubTitle.toLowerCase().split(' ').join('-') + '.jpg'" class="absolute z-[10] w-[220px] rounded-sm -top-[50px] shadow-md -right-[80px]"/>
                  </p>
                </router-link>
              </div>
            </div>
            <div v-if="menuItems[activeNavLink.toLowerCase()].image"
              class="w-full aspect-[3/4] flex items-start justify-end">
              <img :src="menuItems[activeNavLink.toLowerCase()].image[0].image"
                class="w-full h-full object-cover object-top" alt="Menu Image" />
            </div>
          </div>
          <div v-else v-for="[key, value] in Object.entries(menuItems[activeNavLink.toLowerCase()]).slice(1)" :key="key">
            <div v-for="item in value" :key="item" class="py-[4px]">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-[30px] items-center text-lightBlack">
        <v-icon name="io-search" class="largeScreenOnly cursor-pointer"
          @click="handleActivatorClicks('search')"></v-icon>
        <v-icon name="fa-user-alt" class="largeScreenOnly"></v-icon>
        <v-icon name="hi-heart" @click="handleActivatorClicks('wishlist')" class="cursor-pointer"></v-icon>
        <v-icon name="md-shoppingcart-round" @click="handleActivatorClicks('cart')" class="cursor-pointer"></v-icon>
        <v-icon name="pr-bars" scale="1.5" class="cursor-pointer text-lightBlack smallScreenOnly" @click="handleActivatorClicks('side_bar')"></v-icon>
      </div>
    </div>
  </div>

</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import NavLinks from './NavLinks.json';
import { menuItem } from '../data/menuItems'
export default {
  props: {
    handleActivatorClicks: {
      type: Function,
    },
  },
  setup() {
    const navLinksContent = NavLinks
    let activeNavLink = ref('')
    let navLinkSubTitle = ref('')
    const menuItems = reactive(menuItem)
    let dropdownPosition = reactive({ left: 0, top: 80 })
    const isHome = ref(false)

    // on mounted
    onMounted(() => {
      isHome.value = window.location.pathname === "/";
    });

    // Methods
    const activeNavLinkOnHover = (name, event) => {
      activeNavLink.value = name
      const linkRect = event.currentTarget.getBoundingClientRect();
      dropdownPosition.left = linkRect.left + window.scrollX;
      dropdownPosition.top = linkRect.bottom;
    }

    const updateNavLinkSubTitle = (name) =>{

      const img = new Image();
      img.src = `/${name.toLowerCase().split(' ').join('-')}.jpg`;

      img.onload = () => {
        navLinkSubTitle.value = name;
      };
      img.onerror = () =>{
        navLinkSubTitle.value = ''
      }
    }

    return {
      navLinksContent,
      activeNavLinkOnHover,
      activeNavLink,
      menuItems,
      dropdownPosition,
      navLinkSubTitle,
      updateNavLinkSubTitle,
      isHome
    }
  },
}
</script>

<style scoped>
.navlinks {
  width: 45%;
  display: flex;
  max-width: 600px;
  /* height: 100%;
  align-items: center; */

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

.menuItems {
  position: relative;
}

.menuItems::after {
  content: "";
  display: block;
  height: 80%;
  position: absolute;
  width: 1px;
  background-color: #e7e7e7;
  right: -25px;
  top: 0px;
}

.eachMenuItem:hover p {
  color: #333;
  border-bottom: 1px solid #333;
}
</style>
