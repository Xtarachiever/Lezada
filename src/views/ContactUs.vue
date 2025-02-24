<template>
  <LayoutView>
    <BannerView details="home/contact us" />
    <div class="text-center py-[50px]">
      <p class="py-2">COME HAVE A LOOK</p>
      <p class="text-[38px] text-lightBlack pb-[30px]">Contact detail</p>
      <div class="text-left items-start flex flex-col lg:flex-row gap-[30px] justify-between w-[80%] m-auto py-[40px] pb-[60px]">
        <div class="flex items-center gap-[10px]">
          <v-icon name="fa-map-marker-alt" scale="2" class="text-gray1"></v-icon>
          <div>
            <p class="text-[15px] pb-2">ADDRESS</p>
            <p class="text-gray1">1800 Abbot Kinney Blvd. Unit D & E Venice</p>
          </div>
        </div>
        <div class="flex items-end gap-[20px]">
          <div class="flex flex-col gap-[40px] lg:gap-[20px]">
            <v-icon name="fa-phone-alt" scale="1.4" class="text-gray1"></v-icon>
            <v-icon name="md-email-round" scale="1.4" class="text-gray1"></v-icon>
          </div>
          <div class="flex flex-col gap-[13px]">
            <p class="text-[15px]">CONTACT</p>
              <p class="text-gray1">
                <span>Mobile: (+88) – 1990 – 6886</span><br />
                <span> Hotline: 1800 – 1102</span>
              </p>
              <p class="text-gray1">Mail: contact@lezadastore.com</p>
          </div>
        </div>
        <div class="flex gap-[10px] items-end">
          <v-icon name="bi-clock-fill" scale="1.4" class="text-gray1 mb-6 lg:mb-3"></v-icon>
          <div class="space-y-[10px]">
            <p class="text-[15px]">HOUR OF OPERATION</p>
            <div class="text-gray1">
              <span>Monday – Friday : 09:00 – 20:00</span><br/>
              <span>Sunday & Saturday: 10:30 – 22:00</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Map -->
      <div class="relative w-[90%] sm:w-[80%] m-auto max-h-[500px] h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.615574213267!2d3.3988596743937305!3d6.443381993547897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bd384cdf87b%3A0xc83383bffdab3596!2sMuson%20Centre!5e0!3m2!1sen!2sng!4v1733253941423!5m2!1sen!2sng"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
       <div class="pt-[60px]">
        <p class="text-[40px]">Get in touch</p>
        <div>
          <div class="px-4 w-[90%] sm:w-[70%] m-auto space-y-[30px] pt-[40px] max-w-[1000px]">
            <div class="flex gap-[40px] flex-col sm:flex-row">
              <InputDiv label="First Name"  top="top-[10px]" v-model="nameValue" capitalize="true" class-variant="text-gray1"/>
              <InputDiv label="Email"  top="top-[10px]" capitalize="true" v-model="emailValue" classVariant="text-gray1"/>
            </div>
            <InputDiv placeholder="Subject"  top="top-[10px]" capitalize="true"/>
            <textarea rows="6" placeholder="Message" id="message" name="message" class="w-full border-b-2 border-gray1 hover:border-lightBlack outline-none"></textarea>
            <div class="py-4">
              <ButtonDiv name="Submit"/>
            </div>
          </div>
        </div>
       </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue'
import BannerView from '@/components/Reuseables/BannerView.vue'
import InputDiv from '@/components/Reuseables/InputDiv.vue';
import ButtonDiv from '@/components/Reuseables/ButtonDiv.vue';
import { ref } from 'vue';
export default {
  components: { LayoutView, BannerView, InputDiv, ButtonDiv },
  setup(){
    const emailValue = ref('')
    const nameValue = ref('')

    return{
      emailValue,
      nameValue
    }
  }
}
</script>

<style></style>
