<template>
  <div>
    <div class="fixed top-[0px] w-full z-[2]">
      <NavBar :handleActivatorClicks="handleActivatorClicks"/>
    </div>
    <div v-show="sideBarActivators[activeName]" class="top-[0px] fixed w-full h-full bg-transparentBg z-[10]">
      <SideBar :handleActivatorClicks="handleActivatorClicks" :name="activeName" />
    </div>
    <div v-show="sideBarActivators['search']" class="top-[0px] fixed w-full h-full bg-transparentBg z-[10]">
      <SearchView :handleActivatorClicks="handleActivatorClicks" />
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
import { reactive, ref } from 'vue';
import SearchView from './SearchView.vue';
export default {
  components: { NavBar, FooterView, SideBar, SearchView },

  setup(){
    const sideBarActivators = reactive({})
    let activeName = ref('')

  // Methods
    const handleActivatorClicks = (name) =>{
      sideBarActivators[name] = !sideBarActivators[name]
      activeName.value = name
    }

    return{
      handleActivatorClicks,
      sideBarActivators,
      activeName
    }
  }
}
</script>

<style>
.close-icon{
  display: inline-block;
  transition: transform 0.5s ease-in-out;
  transform-origin: center;
}
.close-icon:hover{
  transform:rotate(90deg);
}
</style>
