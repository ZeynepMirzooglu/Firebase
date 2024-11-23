<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">Yeni Yazı Ekle</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label class="form-label">Başlık</label>
              <input type="text" class="form-control" v-model="formData.title">
            </div>
            <div class="mb-3">
                <label class="form-label">Yazı</label>
                <textarea type="text" class="form-control" rows="5" v-model="formData.description"></textarea>
              </div>
            <button type="submit" class="btn btn-primary ">Kaydet</button>
          </form>
        </div>
    </div>
</template>
<script setup>
import { DB } from '@/firebase/configs.js';
import {collection,addDoc} from 'firebase/firestore';
import { reactive } from 'vue';
import {useRouter} from 'vue-router';


const router = useRouter();

const formData =reactive({
  title:'',
  description:''});

const submitForm = async ()=>{
  const notesCollection = collection(DB,'notes');
  await addDoc(notesCollection,{
    ...formData
  });
  formData.title='';
  formData.description='';
  router.push('/');
}
</script>