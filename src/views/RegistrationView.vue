<template>
  <LayoutView>
    <BannerView name="Customer Login" details="home/customer login"/>
    <div
      class="my-[150px] w-[80%] lg:max-w-[1200px] lg:w-full m-auto flex flex-col px-6 lg:flex-row justify-between gap-[40px]"
    >
      <div class="login-div bg-gray2 p-4 px-8 py-[50px] w-full">
        <div>
          <p class="text-[30px] text-center">Login</p>
          <p class="text-center">Great to have you back!</p>
          <div class="space-y-[50px] py-6 pt-[40px]">
            <InputDiv placeholder="Username or email address" />
            <InputDiv placeholder="Password" />
          </div>
          <div class="py-6">
            <ButtonDiv name="LOGIN" />
          </div>
          <div class="py-2">
            <input type="checkbox" class="mr-2" id="rememberMe" />
            <label for="rememberMe">Remember Me</label>
          </div>
          <p class="pt-4">Lost your password</p>
        </div>
      </div>
      <div class="register-div p-4 px-8 py-[50px] w-full">
        <div>
          <p class="text-[30px] text-center">Register</p>
          <p class="text-center">If you don't have an account, register now!</p>
          <div class="space-y-[50px] py-6 pt-[40px]">
            <InputDiv placeholder="" label="Email Address" />
            <InputDiv label="Password" />
          </div>
          <div class="py-6 text-center">
            <ButtonDiv name="REGISTER" />
          </div>
        </div>
      </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue'
import InputDiv from '@/components/Reuseables/InputDiv.vue'
import ButtonDiv from '@/components/Reuseables/ButtonDiv.vue'
import BannerView from '@/components/Reuseables/BannerView.vue';
export default {
  components: {
    LayoutView,
    InputDiv,
    ButtonDiv,
    BannerView
  },
}
</script>

<style></style>
