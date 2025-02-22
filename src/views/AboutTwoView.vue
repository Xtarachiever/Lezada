<template>
  <LayoutView>
    <BannerView name="About Us Two" details="home/about two" />
    <div class="text-center pt-[80px] pb-[150px]">
      <p class="text-4xl pb-5">Basic minimalism</p>
      <p>LEZADA STORE - SIMPLY AND BASIC</p>
      <div class="flex flex-col md:flex-row gap-[30px] justify-between text-left py-[80px] px-[20px] sm:px-[60px]">
        <img src="/about-two-pic.png" alt="" class="w-full md:w-[52%]" />
        <div class="flex flex-col space-y-[15px]">
          <p class="text-gray1 text-left max-w-[600px]">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
            suscipit sagittis leo
            sit estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit. ipsum dolor sit amet, consectetur
            cing elit. Suspe ndisse suscipit sagittis leo sit es</p>
          <div>
            <p class="text-sm py-4">ADDRESS</p>
            <p class="text-gray1">1800 Abbot Kinney Blvd. Unit D & E Venice</p>
          </div>
          <div>
            <p class="py-4">PHONE</p>
            <p class="text-gray1">Mobile: (+88) – 1990 <br />Hotline: 1800 – 1102</p>
          </div>
          <div>
            <p class="py-4">EMAIL</p>
            <p class="text-gray1">contact@lezadastore.com</p>
          </div>
        </div>
      </div>
      <div class="testimonials bg-[url('/testimonials-bg.png')] px-[40px] md:px-[100px] py-16 min-h-[500px]">
        <Splide ref="sliderRef" :options="{
          type: 'loop', perPage: 1, gap: '20px', arrows: false
        }" class="relative cursor-grab">
          <SplideSlide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="flex flex-col md:flex-row items-center gap-[30px] text-lightBlack justify-center">
              <div class="w-[200px] h-[200px] rounded-full md:rounded-[0px] md:w-[250px] md:h-[300px] overflow-clip">
                <img :src="testimonial.profilePic" alt="profile" class="object-cover object-top" />
              </div>
              <div class="py-[30px] md:w-[55%]">
                <v-icon name="ri-double-quotes-r" scale="1.4"></v-icon>
                <p class="text-[24px] max-w-[900px]">{{ testimonial.testimonies }}</p>
                <div class="flex flex-col pt-4">
                  <p class="font-semibold py-4 text-[18px]">{{ testimonial.name }}</p>
                  <p class="text-gray1">/ {{ testimonial.job }}</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div class="h-[500px] lg:h-[800px] px-8 py-8 pt-[40px]">
        <div class="img_div h-full relative">
          <div class="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
            <v-icon name="bi-play-circle" scale="5"
              class="text-white cursor-pointer hover:scale-125 transition duration-150 ease-out"
              @click="playVideo = true"></v-icon>
            <p class="text-[40px] font-semibold text-white tracking-widest pt-2">OUR STORY</p>
          </div>
          <img src="/about2-video-bg.png" alt="Video Clip" class="h-full w-full m-auto object-cover object-left" />
        </div>
      </div>
      <div class="fixed top-0 bg-transparentBg h-full w-full left-0 z-10 mt-0 z-[2]" v-if="playVideo">
        <div class="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] px-8 w-full">
          <div class="videoPlayer">
            <v-icon name="io-close-sharp" class="absolute cursor-pointer -top-[20px] -right-[10px] bg-white z-[2]"
              scale="1.5" @click="playVideo = false"></v-icon>
            <iframe src="https://www.youtube.com/embed/feOScd2HdiU" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-center text-left gap-[20px] w-[92%] lg:w-[80%] m-auto">
        <div class="about_orders">
          <span class="text-xs">On at orders over $99</span>
          <p class="text-3xl text-lightBlack">Free shipping & return</p>
          <p class="text-gray1">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>
        </div>
        <div class="about_orders">
          <span class="text-xs">Support 24/7</span>
          <p class="text-3xl">Money back</p>
          <p class="text-gray1">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>
        </div>
      </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue';
import BannerView from '@/components/Reuseables/BannerView.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { Testimonials } from '@/components/data/testimonials';
import { reactive, ref } from 'vue';
export default {
  components: {
    LayoutView,
    BannerView,
    Splide,
    SplideSlide
  },
  setup() {
    const testimonials = reactive(Testimonials);
    const playVideo = ref(false)
    return {
      testimonials,
      playVideo
    }
  }
}
</script>

<style>
.videoPlayer {
  position: relative;
  width: 90%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  margin: auto;
}

.videoPlayer iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.about_orders{
  padding: 20px;
}
.about_orders p{
  max-width: 600px;
  padding: 10px 0px;
}
</style>
