<template>
  <LayoutView>
    <BannerView details="home/F.A.Q" />
    <div class="w-[92%] m-auto py-8 space-y-[50px] py-[90px]">
      <FAQAccordian :data="shippingInformation" title="Shipping Information"/>
      <FAQAccordian :data="paymentInformation" title="Payment Information" />
      <FAQAccordian :data="ordersInformation" title="Orders and Returns" />
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue';
import BannerView from '@/components/Reuseables/BannerView.vue';
import { ShippingInformation, PaymentInformation, OrdersAndReturns } from '@/components/data/shippingData';
import FAQAccordian from '@/components/Reuseables/FAQAccordian.vue';
import { reactive } from 'vue';
export default {
  components: { LayoutView, BannerView, FAQAccordian },
  setup(){
    const shippingInformation = reactive(ShippingInformation);
    const paymentInformation = reactive(PaymentInformation);
    const ordersInformation = reactive(OrdersAndReturns)

    return{
      shippingInformation,
      paymentInformation,
      ordersInformation
    }
  }
}
</script>

<style></style>
