<template>
  <div id="app">
    <movie-info title="Original" :url="baseUrl" :req="requests.fetchNetflixOriginals" />
    <movie-info title="ActionMovies" :url="baseUrl" :req="requests.fetchActionMovies" />
  </div>
</template>

<script>
  import MovieInfo from "./components/MovieInfo.vue";
  const baseUrl= "https://api.themoviedb.org/3";
  const m = "a54618fe0fbb1c35737e9a35ec28e5de";
  const requests = {
    fetchTrending: "/trending/all/week?api_key=".concat(m, "&language=en-US"),
    fetchNetflixOriginals: "/discover/tv?api_key=".concat(m, "&with_network=213"),
    fetchTopRated: "/movie/top_rated?api_key=".concat(m, "&language=en-US"),
    fetchActionMovies: "/discover/movie?api_key=".concat(m, "&with_genres=28"),
    fetchComedyMovies: "/discover/movie?api_key=".concat(m, "&with_genres=35"),
    fetchHorrorMovies: "/discover/movie?api_key=".concat(m, "&with_genres=27"),
    fetchRomanceMovies: "/discover/movie?api_key=".concat(m,"&with_genres=10749"),
    fetchDocumentaries: "/discover/movie?api_key=".concat(m, "&with_genres=99"),
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
    },
  };
</script>
<style>
  html{
    overflow-x: hidden;
  }
</style>