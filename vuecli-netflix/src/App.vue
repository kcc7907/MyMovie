<template>
  <div id="app">
    <Navbar />
    <!-- <Movie-info title="Original" :url="baseUrl" :req="requests.fetchNetflixOriginals" />
    <Movie-info title="ActionMovies" :url="baseUrl" :req="requests.fetchActionMovies" /> -->

    <div class="container-fluid ">
      <div class="row">
        <div class="tabs col-2 ">
          <Genres />
        </div>
        <div class="main col-10 ">
          <!-- <Movies title="ComedyMovies" :url="baseUrl" :req="requests.fetchComedyMovies"/> -->
          <!-- <Movies /> -->
          
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer class="container text-center">
      copyright@all
    </footer>
  </div>
</template>

<script>
  // import MovieInfo from "./components/MovieInfo.vue";
  // import Movies from "./components/Movies.vue";
  // import Movies from "./views/Movies.vue";
  import Navbar from "./components/Navbar.vue";
  import Genres from "./components/Genres.vue";
  import store from './store';
 
  export default {
    name: "App",
    store,
    data() {
      return {
        // requests:requests,
        // baseUrl:baseUrl,
        data:store.state.kind,
        req:this.$store.state.requests,
      };
    },
    components: {
      // MovieInfo,
      // Movies,
      Navbar,
      Genres
    },
    mounted() {
      document.onreadystatechange = subSomething;
      function subSomething(){
      if(document.readyState == "complete"){ 

      //載入完成執行區塊
      }
        console.log(document.readyState);
      }
    },
  };
</script>
<style>
  html{
    overflow-x: hidden;   
  }
  #app{
    background: #111;
  }
  .container-fluid *{
    box-sizing: border-box;
    /* border:1px solid red; */
  }
  footer{
    color: white;
    border:1px solid white;
  }
  h1{
    color: white;
  }
</style>