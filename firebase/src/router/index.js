import AddArticle from '@/components/admin/AddArticle.vue'
import UpdateArticle from '@/components/admin/UpdateArticle.vue'
import Home from '@/components/Home.vue'
import Register from '@/components/users/Register.vue'
import { AUTH } from '@/firebase/configs'
import { createRouter, createWebHistory } from 'vue-router'

const isAuth=(to,from)=>{
 let user = AUTH.currentUser;
 if(!user){
  return '/user/register';
 }
 return true;
}
const isLoggedIn=(to,from)=>{
  let user = AUTH.currentUser;
  if(user){
   return '/';
  }
  return true;
 }
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/register',
      component: Register,
      beforeEnter:isLoggedIn
    },
    {
      path: '/admin/addArticle',
      component: AddArticle,
      beforeEnter:isAuth
    },
    {
      path: '/admin/updateArticle/:id',
      component: UpdateArticle,
      params:true,
      beforeEnter:isAuth
    },
  ],
})

export default router
