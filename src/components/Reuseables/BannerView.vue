<template>
    <div :class="aboutUrlIncluded ? `bg-[url('/about-banner.png')]` : `bg-[url('/register-banner.jpg')]`" class="min-h-[220px] pt-4 px-5 bg-no-repeat">
      <div class="max-w-[1200px] m-auto w-[80%] lg:w-full">
        <div v-for="detail in bannerDetails" :key="detail.label">
          <p class="mt-[50px] text-[45px]">{{ truncateText(detail.header,25) }}</p>
          <span class="text-[15px] text-gray1">{{ detail.label.slice(0,-1).join(' / ') }}</span>
          <span class="text-[15px]">{{ ' / ' + detail.label.slice(-1).join(' / ') }}</span>
        </div>
      </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props:['name','details','routePath'],
  setup(props){
    const route = useRoute()

    const aboutUrlIncluded = ref('')
    const bannerDetails = computed(()=>{
      const link = props.details.split('/')
      const header = link[link.length - 1].charAt(0).toUpperCase() + link[link.length - 1].slice(1)
      const label = link.map((segment)=>segment.charAt(0).toUpperCase() + segment.slice(1))
      return [{
        label,
        header
      }]
    })

    onMounted(()=>{
      aboutUrlIncluded.value = route.path.split('/').some(value => ['about', 'contact-us', 'faq','about-us-two','shop'].includes(value));
    })

    return{
      bannerDetails,
      aboutUrlIncluded
    }
  }
}
</script>

<style>

</style>
