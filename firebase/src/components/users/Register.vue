<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">{{register ? 'Kayıt Formu' : 'Kullanıcı Girişi'}}</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label class="form-label" >Email</label>
              <input type="email" v-model="userData.email" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Şifre</label>
                <input type="password" v-model="userData.password" class="form-control">
              </div>
            <button type="submit" class="btn btn-primary">{{register ? 'Kaydol' : 'Giriş Yap'}}</button>
          </form>
          <hr/>
          <button class="btn btn-outline-primary" @click="register =!register">{{register ? 'Giriş Yap':'Kaydol'}}</button>
        </div>
    </div>
</template>
<script setup>
import {reactive,ref} from 'vue';
import {AUTH} from '@/firebase/configs.js';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter,useRoute} from 'vue-router';


const router=useRouter();
const register =ref(true);
const userData = reactive({
  email:'',
  password:''
})
const registerUser=async()=>{
  try {
    await createUserWithEmailAndPassword(AUTH,userData.email,userData.password);
    router.push("/");
  } catch (error) {
    console.log(error)
  }

}
const sigInUser=async()=>{
  try {
    await signInWithEmailAndPassword(AUTH,userData.email,userData.password);
    router.push("/");
  } catch (error) {
    console.log(error)
  }

}
const submitForm=()=>{
if(register.value){
  registerUser();
}else{
sigInUser();
}
}
</script>