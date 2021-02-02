<template>
  <div id="app">
    <movie-info title="Original" :url="baseUrl" :req="requests.fetchNetflixOriginals" />
    <movie-info title="ActionMovies" :url="baseUrl" :req="requests.fetchActionMovies" />
    <div class="alert alert-success">This is a sweet success message</div>
    <button type="button" class="btn btn-primary">Bootstrap button</button>
    <Pagination/>
  </div>
</template>

<script>
  import MovieInfo from "./components/MovieInfo.vue";
  import Pagination from "./components/Pagination.vue";

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
    data() {
      return {
        requests:requests,
        baseUrl:baseUrl
      };
    },
    components: {
      MovieInfo,
      Pagination
    },
  };
</script>
<style>
  html{
    overflow-x: hidden;
  }
</style>