<template>
  <div class="bg-gray2 py-24 px-12 lg:px-6">
    <div v-if="fewContentFooter" class="flex items-center flex-wrap justify-between gap-[30px] sm:w-[85%] m-auto">
      <div class="text-gray1 space-y-[10px]">
        <div class="flex gap-x-[20px] text-[14px] flex-wrap">
          <p>ABOUS US</p>
          <p>STORE LOCATION</p>
          <p>CONTACT</p>
          <p>SUPPORT</p>
          <p>POLICY</p>
          <p>FAQS</p>
        </div>
        <div class="text-[14px]">
          <span>© 2025 lezada. All Rights Reserved</span>
          <p class="text-black font-bold contact_number">(+00) 123 567990</p>
          <span>contact@lezada.com</span>
        </div>
      </div>
      <div class="second-footer-content flex flex-col gap-[10px]">
        <div class="flex gap-[20px]">
          <v-icon name="co-twitter"></v-icon>
          <v-icon name="fa-facebook-f"></v-icon>
          <v-icon name="fa-instagram"></v-icon>
          <v-icon name="pr-youtube"></v-icon>
        </div>
        <div>
          <img src="/pay.png" alt="pay"/>
        </div>
      </div>
    </div>
    <div class="justify-items-center grid grid-cols-3 lg:grid-cols-6 footer-contents gap-[50px]" v-else>
      <div class="col-span-1">
        <div class="pb-4">
          <img src="/logo.png" alt="Lezada" />
        </div>
        <div class="flex flex-col gap-[10px]">
          <p>&#169; 2025 lezada</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
      <div class="col-span-1">
        <p class="font-semibold header">ABOUT</p>
        <p>About us</p>
        <p>Store Location</p>
        <p>Contact</p>
        <p>Orders Tracking</p>
      </div>
      <div class="col-span-1">
        <p class="font-semibold header">USEFUL LINKS</p>
        <p>Returns</p>
        <p>Support Policy</p>
        <p>Size guide</p>
        <p>FAQs</p>
      </div>
      <div class="contacts col-span-1">
        <p class="font-semibold header">FOLLOW US ON</p>
        <p><v-icon name="co-twitter"></v-icon><span>Twitter</span></p>
        <p><v-icon name="fa-facebook-f"></v-icon><span>Facebook</span></p>
        <p><v-icon name="fa-instagram"></v-icon><span>Instagram</span></p>
        <p><v-icon name="pr-youtube"></v-icon><span>Youtube</span></p>
      </div>
      <div class="col-span-2 max-w-[400px]">
        <p class="subscribe header">Subscribe.</p>
        <p class="max-w-[400px] 2xl:max-w-none">
          Subscribe to our newsletter to receive news on update.
        </p>
        <div>
          <InputDiv iconName="co-arrow-right" placeholder="Your email address" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import InputDiv from '../Reuseables/InputDiv.vue'
export default {
  components: {
    InputDiv,
  },

  setup(){
    const fewContentFooter = ref(false);
    const pathsForFewContentFooter = reactive(['/'])

    onMounted(()=>{
      fewContentFooter.value = pathsForFewContentFooter.includes(window.location.pathname) ? true : false
    })

    return{
      fewContentFooter
    }
  }
}
</script>

<style>
.footer-contents > div {
  display: flex;
  gap: 30px;
  flex-direction: column;
}
.footer-contents p {
  color: #7e7e7e;
  font-size: 15px;
}
.footer-contents p.subscribe {
  font-size: 34px;
  font-weight: 400;
}
.contacts p {
  display: flex;
  align-items: center;
  gap: 10px;
}
.footer-contents p.header,
.contacts p svg {
  color: #333;
}
.contact_number{
  position: relative;
  padding: 0px 10px;
  display: inline;
}
.contact_number::after,
.contact_number::before{
  content: "";
  display: block;
  position: absolute;
  height: 15px;
  width: 1px;
  background: #333;
  top: 2px;
}
.contact_number::after{
  right: 4px;
}
.contact_number::before{
  left: 4px;
}
.second-footer-content{
    display: flex;
    align-items: end;
}
@media screen and (max-width:1008px){
  .second-footer-content{
    align-items: start;
  }
}
</style>
