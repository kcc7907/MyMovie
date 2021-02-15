import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Kind from '../views/Kind.vue'
// import Navbar from '../views/header/Navbar.vue'

Vue.use(VueRouter)

const routes = [

  // {
  //   path:'/movie?i=:num?&:kind',
  //   name:'kind',
  //   components: {
  //     b:Kind
  //   },
  //   props:{ 
  //     b: true
  //   } 
  // },
  // {
  //   path: '/',
  //   name: 'navbar',
  //   component: Navbar
  // },
  {
    path:'/',
    name:'Home',
    components: {
      Home:Home
    },
    // props:{ 
    //   b: true
    // } 
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
