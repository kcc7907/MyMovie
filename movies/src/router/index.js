import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import OverView from '../views/OverView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    components: {
      Home
    },
    props: {
      Home: true
    }
  },
  {
    path: '/movies/i=:num&:userId',
    name: 'Genres',
    components: {
      Movies,
    },
    props: {
      Movies: true
    }
  },
  {
    // path: '/movie/:title&:id',
    path: '/OverView/:id&:title',
    name: 'OverView',
    components: {
      OverView
    },
    props: {
      OverView: true
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
