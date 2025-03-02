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
          <LoginView />
          <div class="py-2 flex items-center">
            <input type="checkbox" class="mr-2" id="rememberMe" />
            <label for="rememberMe">Remember Me</label>
          </div>
          <p class="pt-4">Lost your password</p>
        </div>
      </div>
      <div class="register-div p-4 px-8 py-[50px] w-full">
        <form @submit.prevent="handleSubmit">
          <p class="text-[30px] text-center">Register</p>
          <p class="text-center">If you don't have an account, register now!</p>
          <div class="space-y-[50px] py-6 pt-[40px]">
            <InputDiv placeholder="" label="Full Name" v-model="fullName" :errorMsg="errorArr['name']"/>
            <InputDiv placeholder="" label="Email Address" v-model="email" :errorMsg="errorArr['email']"/>
            <InputDiv placeholder="" label="Phone Number" v-model="phoneNumber" :errorMsg="errorArr['phone_number']"/>
            <InputDiv placeholder="" label="Address" v-model="address" :errorMsg="errorArr['address']"/>
            <InputDiv label="Password" v-model="password" :errorMsg="errorArr['password']"/>
          </div>
          <div class="py-6 text-center">
            <ButtonDiv name="REGISTER" type="submit"/>
          </div>
        </form>
      </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from '@/components/dashboard/LayoutView.vue'
import InputDiv from '@/components/Reuseables/InputDiv.vue'
import ButtonDiv from '@/components/Reuseables/ButtonDiv.vue'
import BannerView from '@/components/Reuseables/BannerView.vue';
import { FormValidation } from '@/hooks/FormValidation';
import { reactive, ref } from 'vue';
import { registerUsers } from '@/functions/AuthProviders';
import { toast } from 'vue3-toastify';
import LoginView from '@/components/auth/LoginView.vue';
export default {
  components: {
    LayoutView,
    InputDiv,
    ButtonDiv,
    BannerView,
    LoginView
  },
  setup(){
    const email = ref('')
    const password = ref('')
    const phoneNumber = ref('')
    const address = ref('')
    const fullName = ref('')
    let errorArr = reactive({})

    // Methods
    const handleSubmit = async () =>{
      Object.keys(errorArr).forEach(key => delete errorArr[key]);
      const registrationData = {
        email: email.value,
        password:password.value,
        phone_number: phoneNumber.value,
        address: address.value,
        name: fullName.value
      }
      const errors = FormValidation(
        registrationData
      )
      Object.assign(errorArr, errors)
      try{
        if(Object.keys(errorArr).length === 0){
          const res = await registerUsers(
            registrationData
          )
          // console.log(res)
          if(res?.status === 201){
            toast.success(res?.data?.message)
          }else if(res?.data){
            toast.error(res?.data?.message)
          }
        }
      }catch(err){
        console.log(err)
      }
    }


    return{
      email,
      password,
      handleSubmit,
      errorArr,
      address,
      phoneNumber,
      fullName
    }
  }
}
</script>

<style></style>
