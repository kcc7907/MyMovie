<template>
  <div id="app">
    <Navbar />
    <Movie-info title="Original" :url="baseUrl" :req="requests.fetchNetflixOriginals" />
    <Movie-info title="ActionMovies" :url="baseUrl" :req="requests.fetchActionMovies" />
    <div class="container-fluid ">
      <div class="row">
        <div class="tabs col-2 ">
          <Genres />
        </div>
        <div class="main col-10 ">
          <Movies title="ComedyMovies" :url="baseUrl" :req="requests.fetchComedyMovies"/>
        </div>
      </div>
    </div>
    <footer class="container text-center">
      copyright@all
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
  import MovieInfo from "./components/MovieInfo.vue";
  import Movies from "./components/Movies.vue";
  import Navbar from "./components/Navbar.vue";
  import Genres from "./components/Genres.vue";
  import store from './store';

  const baseUrl= "https://api.themoviedb.org/3";
  const m = "a54618fe0fbb1c35737e9a35ec28e5de";
  const requests = {
    fetchTrending: "/trending/all/week?api_key=".concat(m, "&language=zh-TW"),
    fetchNetflixOriginals: "/discover/tv?api_key=".concat(m, "&with_network=213&language=zh-TW"),
    fetchTopRated: "/movie/top_rated?api_key=".concat(m, "&language=en-US"),
    fetchActionMovies: "/discover/movie?api_key=".concat(m, "&with_genres=28&language=zh-TW"),
    fetchComedyMovies: "/discover/movie?api_key=".concat(m, "&with_genres=35&language=zh-TW"),
    fetchHorrorMovies: "/discover/movie?api_key=".concat(m, "&with_genres=27&language=zh-TW"),
    fetchRomanceMovies: "/discover/movie?api_key=".concat(m,"&with_genres=10749&language=zh-TW"),
    fetchDocumentaries: "/discover/movie?api_key=".concat(m, "&with_genres=99&language=zh-TW"),
  };
  
  export default {
    name: "App",
    store,
    data() {
      return {
        requests:requests,
        baseUrl:baseUrl,
        data:store.state.kind,
        req:this.$store.state.requests,
      };
    },
    components: {
      MovieInfo,
      Movies,
      Navbar,
      Genres
    },
    mounted() {
      
    },
  };
</script>
<style>
  html{
    overflow-x: hidden;   
  }
  #app{
    background: #222;
  }
  .container-fluid *{
    box-sizing: border-box;
    border:1px solid red;
  }
  footer{
    color: white;
    border:1px solid white;
  }
</style>