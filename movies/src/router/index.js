import Vue from 'vue'
import VueRouter from 'vue-router'
import Kind from '../views/Kind.vue'

Vue.use(VueRouter)

const routes = [

  {
    path:'/movie?i=:num?&:kind',
    name:'kind',
    components: {
      b:Kind
    },
    props:{ 
      b: true
    } 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
