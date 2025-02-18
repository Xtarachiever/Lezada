<template>
  <div>
    <div class="w-full bg-grayWhite py-2 relative">
      <div class="w-[80%]">
        <InputDiv v-model="inputValue" variant="border-0 px-4 bg-transparent pl-5 outline-none text-black"
          placeholder="Search here" />
      </div>
      <v-icon v-show="inputValue !== ''" name="io-close-sharp"
        class="text-lightBlack absolute right-[50px] top-[50%] cursor-pointer -translate-y-[50%]" scale="1"
        @click="inputValue = ''"></v-icon>
      <v-icon name="io-search" scale="0.9"
        class="cursor-pointer absolute right-[15px] top-[50%] -translate-y-[50%] w-[30px]"></v-icon>
    </div>
    <div class="space-y-[15px] pt-8 font-semibold">
      <div v-for="[key, value] in Object.entries(menuItems)" :key="key" class="px-5">
        <div class="flex relative items-center justify-between py-1">
          <p class="font-[550]">{{ key.charAt(0).toUpperCase() + key.slice(1) }}</p>
          <div @click="handleTabToggle(key)" class="cursor-pointer">
            <v-icon name="px-minus" v-if="tabEnlargement[key]"></v-icon>
            <v-icon name="co-plus" v-else></v-icon>
          </div>
        </div>
        <div v-if="tabEnlargement[key]" class="pl-5 mt-2 flex flex-col">
          <ul v-for="(eachTitle, index) in firstTitle(key)" :key="eachTitle">
            <div  class="flex items-center justify-between">
              <li class="text-sm font-normal py-2">{{ eachTitle }} {{ index + 1 }}</li>
              <span v-if="sectionContents(key)">
                <div @click="handleTabToggle(index)" class="cursor-pointer">
                  <v-icon name="px-minus" v-if="tabEnlargement[index]"></v-icon>
                  <v-icon name="co-plus" v-else></v-icon>
                </div>
              </span>
            </div>
            <ul class="space-y-[10px] font-normal py-2" v-if="tabEnlargement[index]">
                <li v-for="(extraTitle, i) in moreMenuItems(key)[index]" :key="i" class="text-sm pl-4">
                  {{ extraTitle }}
                </li>
              </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import InputDiv from '../Reuseables/InputDiv.vue';
import { menuItem } from '../data/menuItems';

export default {
  components: {
    InputDiv
  },

  setup() {
    const inputValue = ref('');
    const menuItems = reactive(menuItem);
    const tabEnlargement = reactive({});

    const handleTabToggle = (name) => {
      tabEnlargement[name] = !tabEnlargement[name]
    }


    const firstTitle = computed(() => (section) => {
      const entries = Object.entries(menuItems[section])
      return entries.filter(([key]) => key !== 'length' && key !== 'image').map(([key, value]) => value[0]?.title)
    })


    const moreMenuItems = computed(() => (section) => {
      const entries = Object.entries(menuItems[section])
        .filter(([key]) => key !== 'length' && key !== 'image')
        .map(([key, value]) => value.slice(1).map(item => item.title));

      return entries;
    });

    const sectionContents = computed(() => (section) => {
      const entries = Object.entries(menuItems[section])
      return entries.filter(([key]) => key !== 'length' && key !== 'image').map(([key, value]) => value.length > 1)
    })

    return {
      inputValue,
      menuItems,
      handleTabToggle,
      tabEnlargement,
      sectionContents,
      firstTitle,
      moreMenuItems
    }
  }
}
</script>

<style></style>
