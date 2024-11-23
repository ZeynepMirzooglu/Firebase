<template>
    <div class="row g-4">
        <div class="col-md-6" v-for="not in note" :key="not.id">
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{not.title}}</h5>
              <p class="card-text">{{not.description}}</p>
            </div>
          </div>
          <div class="card-footer">
             <router-link :to="`/admin/updateArticle/${not.id}`">Yazıyı Güncelle</router-link>
          </div>
        </div>                
    </div>
</template>
<script setup>
import { DB } from '@/firebase/configs.js';
import {collection,getDocs} from 'firebase/firestore';
import{ref} from 'vue'

const note = ref([]);

const notesCollection = collection(DB,'notes');

getDocs(notesCollection).then(snapShot =>{
   // console.log(snapShot);
   let documents =[];
   snapShot.docs.forEach(doc=>{
    documents.push({...doc.data(),id:doc.id})
   });
   note.value = documents;
  // console.log(note.value);
})

</script>