<template>
  <div class="home">
    <Carousel />
    <div class="container-fluid">
      <div class="row">
        <div class="latest col-9">
          <Latest />
        </div>
        <div class="rank col-3">
          <Toprated />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Carousel from "./home/Carousel.vue";
  import Toprated from "./home/Toprated.vue";
  import Latest from "./home/Latest.vue";

  export default {
    name: "Home",
    components: {
      Carousel,
      Toprated,
      Latest,
    },
    data() {
      return {
        playings: [],
        src: "https://image.tmdb.org/t/p/original",
      };
    },
    methods: {
      getPlaying() {
        this.$axios.get(this.$store.state.requests.nowPlaying).then((res) => {
          this.playings = res.data.results.slice(0, 5);
        });
      },
    },
    mounted() {
      this.getPlaying();
    },
  };
</script>

<style lang="scss" scoped>
  .container-fluid {
    margin-top: 10px;
  }
</style>