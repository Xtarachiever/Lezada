<template>
  <LayoutView>
    <BannerView details="home/order Tracking"/>
    <div class="py-[40px]">
      <div class="bg-gray2 px-[30px] py-[50px] max-w-[600px] m-auto">
        <p class="text-gray1">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
        <div class="py-6">
          <p class="text-xl">Order ID</p>
          <InputDiv placeholder="Found in your order confirmation email"/>
        </div>
        <div>
          <p class="text-xl">Billing email</p>
          <InputDiv placeholder="Email used during checkout"/>
        </div>
        <div class="text-center pt-6">
          <ButtonDiv name="Track"/>
        </div>
      </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue';
import BannerView from '@/components/Reuseables/BannerView.vue';
import InputDiv from '@/components/Reuseables/InputDiv.vue';
import ButtonDiv from '@/components/Reuseables/ButtonDiv.vue';
export default {
  components:{
    LayoutView,
    BannerView,
    InputDiv,
    ButtonDiv
  }
}
</script>

<style>

</style>
