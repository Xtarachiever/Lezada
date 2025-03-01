<template>
  <LayoutView>
    <BannerView details="home/shop left sidebar" />
    <div>
      <div class="flex justify-between py-4 items-center border-b border-gray3 px-[20px] xl:px-[160px]">
        <p>Showing 20 of 73 products</p>
        <div class="flex gap-[30px] items-center w-[45%] justify-between px-6">
          <div class="w-[200px] cursor-pointer">
            <SelectDiv :options="['Default', 'Price - High to Low', 'Price - Low to High']" :stylishSelect="true" />
          </div>
          <div class="flex gap-[10px] items-center" >
            <v-icon name="bi-grid-3x3-gap-fill" :class="layoutView === 'smallGrid' ? 'text-lightBlack' : 'text-gray3'" class="hover:text-lightBlack cursor-pointer" scale="1.3" @click="handleViewChanges('smallGrid')"></v-icon>
            <svg @mouseover="iconColor = '#333'" @mouseout="iconColor = '#ccc'" stroke="currentColor" :fill="layoutView === 'largeGrid' ? '#333' : iconColor " @click="handleViewChanges('largeGrid')" class="cursor-pointer"
              stroke-width="0" viewBox="0 0 24 24" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z">
              </path>
            </svg>
            <v-icon name="bi-list-ul" scale="1.5" :class="layoutView === 'list' ? 'text-lightBlack' : 'text-gray3'" class="hover:text-lightBlack cursor-pointer" @click="handleViewChanges('list')"></v-icon>
          </div>
          <div class="text-gray1 cursor-pointer hover:text-lightBlack flex gap-[5px] items-center">
            <v-icon name="bi-filter" class="" scale="1.3"></v-icon>
            <p>Filter</p>
          </div>
        </div>
      </div>
      <!-- Shop Content -->
       <div class="relative p-4 min-h-[100vh] w-[95%] xl:w-[80%] m-auto pt-[120px]">
          <div class="absolute max-w-[330px] w-full px-4" :class="pageStructure === 'left-sidebar' ? 'left-[10px]' : pageStructure === 'right-sidebar' ? 'right-[10px]' : ''">
            <SideBar />
          </div>
          <div class="" :class="pageStructure === 'left-sidebar' ? 'ml-[350px]' : pageStructure === 'right-sidebar' ? 'mr-[350px]' : ''">
            <ShopContent :layoutView="layoutView" />
          </div>
       </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue';
import BannerView from '@/components/Reuseables/BannerView.vue';
import SelectDiv from '@/components/Reuseables/SelectDiv.vue';
import ShopContent from '@/components/shop/ShopContent.vue';
import SideBar from '@/components/shop/SideBar.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
  components: {
    LayoutView,
    BannerView,
    SelectDiv,
    ShopContent,
    SideBar
  },
  setup() {
    const route = useRoute();
    console.log(route.path)
    const iconColor = ref('#ccc');
    const pageStructure = ref('left-sidebar');
    const layoutView = ref('smallGrid');

    const updatePageStructure = () => {
      pageStructure.value = route.path.split("/").filter((value) => value !== "")[1];
    };

    onMounted(updatePageStructure);

    watch(() => route.path, updatePageStructure);

    const handleActiveIcon = () => {
      iconColor.value = '#333'
    }

    const handleViewChanges = (name) =>{
      layoutView.value = name
      // localStorage.setItem('layoutView',layoutView.value)
    }

    return {
      handleActiveIcon,
      iconColor,
      pageStructure,
      layoutView,
      handleViewChanges
    }
  }
}
</script>

<style></style>
