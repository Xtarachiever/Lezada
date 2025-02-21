<template>
  <LayoutView>
    <BannerView name="About" details="home/about" />
    <div class="pt-[50px] text-center w-full px-[20px] lg:px-0 lg:w-[80%] m-auto">
      <p class="text-[14px] sm:text-[16px]">SIMPLY OR WHITE</p>
      <div class="py-6">
        <p class="text-[30px] sm:text-[40px] pb-2">Clever & unique ideas</p>
        <p class="text-gray1 w-[80%] lg:w-[60%] m-auto pb-[40px]">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
          suscipit sagittis leo sit met condimentum
          estibulum is Suspe ndisse suscipit sagittis leo sit met condimentum estibulorem ipsum dolor sit amet,
          consectetur cing elit.</p>
        <div class="flex gap-[10px] items-center h-[500px] lg:h-[800px] justify-center video_container">
          <p class="rotate-[270deg] side_text">LEZEDA STORE</p>
          <div class="img_div h-full relative">
            <div class="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
              <v-icon name="bi-play-circle" scale="5"
                class="text-white cursor-pointer hover:scale-125 transition duration-150 ease-out"
                @click="playVideo = true"></v-icon>
              <p class="text-[40px] font-semibold text-white tracking-wider pt-2">OUR STORY</p>
            </div>
            <img src="/video-background.png" alt="Video Clip" class="h-full w-full m-auto object-cover object-left" />
          </div>
          <p class="rotate-[270deg] side_text">OUR STORY</p>
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
      </div>
      <div class="contact-div">
        <div class="contact-info">
          <div>
            <p>ADDRESS</p>
            <span>1800 Abbot Kinney Blvd. Unit D & E Venice</span>
          </div>
          <div>
            <p>PHONE</p>
            <a href="tel:(+88) – 1990">Mobile: (+88) – 1990</a>
          </div>
          <div>
            <p>EMAIL</p>
            <a href="mailto:contact@lezadastore.com">contact@lezadastore.com</a>
          </div>
        </div>
        <div class="contact-text px-0 lg:px-[30px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit estibulum issim
            Lorem ipsum dolor sit amet, consectetur cing elit. ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
            suscipit sagittis leo sit es
          </p>
          <ButtonDiv name="ONLINE STORE" iconName="co-plus"/>
        </div>
      </div>
    </div>
  </LayoutView>
</template>


<script>
import BannerView from '@/components/Reuseables/BannerView.vue';
import LayoutView from '@/components/dashboard/LayoutView.vue';
import { ref } from 'vue';
import ButtonDiv from '@/components/Reuseables/ButtonDiv.vue';
export default {
  components: {
    BannerView,
    LayoutView,
    ButtonDiv
  },
  setup() {
    const playVideo = ref(false);

    return {
      playVideo
    }
  },
}
</script>

<style scoped>
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
.contact-div{
  display: flex;
  justify-content: space-around;
  align-content: center;
  text-align: left;
  padding: 30px 0px;
  gap: 30px;
}
.contact-info div a,
.contact-info span{
  color: #777;
  display: inline-block;
  padding: 20px 0px;
}
.contact-info{
  display: flex;
  flex-direction: column;
}
.contact-text{
  width: 50%;
}
.contact-text p{
  padding-bottom: 40px;
  color: #777;
}
.video_container .img_div{
  width: 75%;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
@media screen and (max-width:768px){
  .contact-div{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contact-info,
  .contact-text{
    width: 80%;
  }
  .side_text{
    display: none;
  }
  .video_container .img_div{
    width: 80%;
  }
}
</style>
