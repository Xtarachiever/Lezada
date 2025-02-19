<template>
  <div class="">
    <div class="w-full bg-grayWhite py-2 fixed z-[10] h-[60px]">
      <div class="w-[80%] fixed">
        <InputDiv v-model="inputValue" variant="border-0 px-4 bg-transparent pl-5 outline-none text-black"
          placeholder="Search here" />
      </div>
      <v-icon v-show="inputValue !== ''" name="io-close-sharp"
        class="text-lightBlack fixed right-[50px] top-[30px] cursor-pointer -translate-y-[50%]" scale="1"
        @click="inputValue = ''"></v-icon>
      <v-icon name="io-search" scale="0.9"
        class="cursor-pointer fixed right-[15px] top-[30px] -translate-y-[50%] w-[30px]"></v-icon>
    </div>
    <div class="space-y-[15px] pt-[80px] font-semibold pb-[150px]">
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
    <div class="px-6 py-[40px]">
      <div>
        <span class="text-gray1">Choose Language</span>
        <SelectDiv :options="['English','French','Germany']" />
      </div>
      <div class=" py-4">
        <span class="text-gray1">Choose Currency</span>
        <SelectDiv :options="['USD','EUR','GBP']" />
      </div>
      <div class="text-center pt-[50px]">
        <div class="contact">
          <v-icon name="fa-user-alt" scale="0.8"></v-icon>
          <span>Login / Register</span>
        </div>
        <div class="contact py-[10px]">
          <v-icon name="io-phone-portrait-sharp" scale="0.8"></v-icon>
          <span>(1245) 2456 012</span>
        </div>
        <div class="contact">
          <v-icon name="md-email-round" scale="0.8"></v-icon>
          <span>info@yourdomain.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import InputDiv from '../Reuseables/InputDiv.vue';
import { menuItem } from '../data/menuItems';
import SelectDiv from '../Reuseables/SelectDiv.vue';

export default {
  components: {
    InputDiv,
    SelectDiv
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

<style>
.contact{
  display: flex;
  align-items: center;
  gap: 10px;
}
.contact span{
  color: #777;
  transition: all .3s ease-in-out;
  cursor: pointer;
}
.contact span:hover{
  color: black;
}
</style>
