import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import Genres from '../views/movies/Genres.vue'
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
    path: '/',
    name: 'Home',
    components: {
      Home,
      Genres
    },
    // props:{ 
    //   b: true
    // } 
  },
  {
    path: '/movies',
    name: 'Movies',
    components: {
      Movies
    },
  },
  {
    path: '/movies?i=:num&:userId',
    name: 'Genres',
    components: {
      Movies
    },
    props:{ 
      Movies: true
    } 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
