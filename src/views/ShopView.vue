<template>
  <LayoutView>
    <BannerView details="home/shop left sidebar" />
    <div>
      <div
        class="flex justify-between py-4 items-center border-b border-gray3 px-[40px] md:px-[20px] xl:px-[130px] flex-col  md:flex-row gap-[30px]">
        <p v-if="allProductData?.data">Showing {{ allProductData?.data?.length }} of {{ allProductData?.total }}
          products</p>
        <div class="hidden sm:flex gap-[30px] items-center w-[90%] md:w-[48%] justify-between px-6">
          <div class="w-[200px] cursor-pointer">
            <SelectDiv :options="['Default', 'Price - High to Low', 'Price - Low to High']" :stylishSelect="true" />
          </div>
          <div class="flex gap-[10px] items-center">
            <v-icon name="bi-grid-3x3-gap-fill" :class="layoutView === 'smallGrid' ? 'text-lightBlack' : 'text-gray3'"
              class="hover:text-lightBlack cursor-pointer" scale="1.3" @click="handleViewChanges('smallGrid')"></v-icon>
            <svg @mouseover="iconColor = '#333'" @mouseout="iconColor = '#ccc'" stroke="currentColor"
              :fill="layoutView === 'largeGrid' ? '#333' : iconColor" @click="handleViewChanges('largeGrid')"
              class="cursor-pointer" stroke-width="0" viewBox="0 0 24 24" height="1.8em" width="1.8em"
              xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z">
              </path>
            </svg>
            <v-icon name="bi-list-ul" scale="1.5" :class="layoutView === 'list' ? 'text-lightBlack' : 'text-gray3'"
              class="hover:text-lightBlack cursor-pointer" @click="handleViewChanges('list')"></v-icon>
          </div>
          <div class="text-gray1 cursor-pointer hover:text-lightBlack flex gap-[5px] items-center"
            @click="handleResize">
            <v-icon name="bi-filter" class="" scale="1.3"></v-icon>
            <p>Filter</p>
          </div>
        </div>
      </div>
      <!-- Shop Content -->
      <div class="relative p-5 md:p-4 min-h-[100vh] w-[95%] xl:w-[85%] m-auto md:pt-[120px]">
        <div class="relative pb-10 md:absolute md:max-w-[330px] w-full md:px-4"
          :class="[pageStructure === 'left-sidebar' ? 'left-[10px]' : pageStructure === 'right-sidebar' ? 'right-[10px]' : '', dropDown ? 'block' : 'hidden']">
          <SideBar v-model:category="category" :categories="categories" :all-product-data="allProductData"/>
        </div>
        <div class=""
          :class="pageStructure === 'left-sidebar' ? 'md:ml-[350px]' : pageStructure === 'right-sidebar' ? 'mr-[350px]' : ''">
          <ShopContent :layoutView="layoutView" :all-product-data="allProductData" :get-all-products="getAllProducts"
            v-model:current-page="currentPage" :paginationDetails="paginationDetails" />
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
import { useProductStore } from '@/store/products';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
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
    const productStore = useProductStore();
    // console.log(route.path)
    const iconColor = ref('#ccc');
    const pageStructure = ref('left-sidebar');
    const layoutView = ref('smallGrid');
    const category = ref('');
    const paginationDetails = ref([]);
    const allProductData = ref([]);
    const currentPage = ref(1)

    const dropDown = ref(false);

    const isSmallScreen = ref(window.matchMedia("(max-width: 760px)").matches);
    watch(()=> window.matchMedia,
      ()=> console.log(isSmallScreen.value)
    )
    const categories = ref([]);



    const handleResize = () => {
      isSmallScreen.value = window.matchMedia("(max-width: 760px)").matches;
      if (isSmallScreen.value) {
        dropDown.value = !dropDown.value
      } else {
        dropDown.value = true
      }
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    // onBeforeMount(() => {
    //   window.removeEventListener("resize", handleResize);
    // });

    onMounted(() => {
      if (!isSmallScreen.value) {
        dropDown.value = true
      }
    })

    const updatePageStructure = () => {
      pageStructure.value = route.path.split("/").filter((value) => value !== "")[1];
    };

    onMounted(async () => {
      const initial = await productStore.getProducts();

      const total = initial?.data?.data?.total;

      if (total) {
        const allProducts = await productStore.getProducts({ per_page: total });

        if (allProducts?.data?.status === "success") {
          categories.value = [
            ...new Set(
              allProducts.data.data.data.map((product) => product.category)
            ),
          ];
        }
      }
    });

    onMounted(updatePageStructure);

    watch(() => route.path, updatePageStructure);

    const handleActiveIcon = () => {
      iconColor.value = '#333'
    }

    const handleViewChanges = (name) => {
      layoutView.value = name
      // localStorage.setItem('layoutView',layoutView.value)
    }


    const getAllProducts = async () => {
      try {
        const params = {
          page: currentPage.value,
          per_page: 10,
          category: category.value
        }
        await productStore.getProducts(params);
        const response = productStore.products?.data;
        if (response?.status === 'success') {
          allProductData.value = response.data

          paginationDetails.value = {
            last_page: response.data.last_page,
            total: response.data.total,
            per_page: response.data.per_page,
            currentPage: response.data.current_page
          };

          currentPage.value = response.data.current_page;
        }
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(() => getAllProducts());

    watch(() => category.value,
      () => getAllProducts(),
    )

    return {
      handleActiveIcon,
      iconColor,
      pageStructure,
      layoutView,
      handleViewChanges,
      handleResize,
      dropDown,
      allProductData,
      getAllProducts,
      currentPage,
      paginationDetails,
      category,
      categories
    }
  }
}
</script>

<style></style>
