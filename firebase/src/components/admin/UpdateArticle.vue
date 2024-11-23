<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">Yazıyı Güncelle</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label class="form-label">Başlık</label>
              <input type="text" class="form-control" v-model="formData.title">
            </div>
            <div class="mb-3">
                <label class="form-label">Yazı</label>
                <textarea type="text" class="form-control" rows="5" v-model="formData.description"></textarea>
              </div>
            <button type="submit" class="btn btn-primary ">Güncelle</button>
            <hr/>
            <button type="submit" class="btn btn-danger" @click="deleteNote">Sil</button>
          </form>
        </div>
    </div>
</template>
<script setup>
import { DB } from '@/firebase/configs.js';
import {doc,getDoc,updateDoc,deleteDoc} from 'firebase/firestore';
import { reactive } from 'vue';
import {useRouter,useRoute} from 'vue-router';


const router = useRouter();
const route= useRoute();

const formData =reactive({
  title:'',
  description:''});

const docRef= doc(DB,'notes',route.params.id);
getDoc(docRef).then(snapshot=>{
   // console.log(snapshot.data(),"snapshot")
   formData.title = snapshot.data().title;
   formData.description = snapshot.data().description;
}).catch(err=>{console.error(err)});

const submitForm = async ()=>{
    try {
        const docRef= doc(DB,'notes',route.params.id);
        await updateDoc(docRef,{...formData})
        router.push('/');
    } catch (error) {
        console.log(error); 
    }

}
const deleteNote= async ()=>{
  try {
    const docRef= doc(DB,'notes',route.params.id);
    await deleteDoc(docRef);
    router.push('/');
  } catch (error) {
    console.log(error); 
  }
}
</script>