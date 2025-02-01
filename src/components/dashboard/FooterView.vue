<template>
  <div class="bg-gray2 py-24 px-12 lg:px-6">
    <div class="justify-items-center grid grid-cols-3 lg:grid-cols-6 footer-contents gap-[50px]">
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
import InputDiv from '../Reuseables/InputDiv.vue'
export default {
  components: {
    InputDiv,
  },
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
</style>
