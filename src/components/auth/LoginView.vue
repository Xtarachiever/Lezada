<template>
    <form v-on:submit.prevent="handleSubmit">
      <div class="space-y-[50px] py-6 pt-[40px]">
        <InputDiv placeholder="Username or email address" v-model="email" :errorMsg="errorsArr['email']" />
        <InputDiv placeholder="Password" v-model="password" :errorMsg="errorsArr['password']" />
      </div>
      <div class="py-6">
        <ButtonDiv name="LOGIN" type="submit"/>
      </div>
    </form>
</template>

<script>
import { reactive, ref } from 'vue';
import InputDiv from '../Reuseables/InputDiv.vue';
import { FormValidation } from '@/hooks/FormValidation';
import ButtonDiv from '../Reuseables/ButtonDiv.vue';
import { loginUsers } from '@/functions/AuthProviders';
import { toast } from 'vue3-toastify';
export default {
  components:{
    InputDiv,
    ButtonDiv
  },
  setup(){
    const password = ref('')
    const email = ref('')

    const errorsArr = reactive({});

    const handleSubmit = async () =>{
      try{
        Object.keys(errorsArr).forEach((key)=> delete errorsArr[key])
        const errors = FormValidation({
          password: password.value,
          email: email.value
        })

        Object.assign(errorsArr, errors)
        if(Object.keys(errorsArr).length === 0){
          const res = await loginUsers({
            password: password.value,
            email: email.value
          })
          if(res?.status === 200){
            localStorage.setItem('lezadaUser', JSON.stringify(res?.data?.data));
            localStorage.setItem('isLoggedIn', true)
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
      password,
      email,
      handleSubmit,
      errorsArr
    }
  },
}
</script>

<style>

</style>
