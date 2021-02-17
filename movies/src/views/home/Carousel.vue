<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in playings"
        :key="item.id"
        type="button"
        :class="{ active: index == 0 }"
        :aria-current="index == 0"
        data-bs-target="#carouselExampleCaptions"
        :data-bs-slide-to="index"
        :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(item, index) in playings"
        :key="item.id"
        :class="{ 'carousel-item': true, active: index == 0 }"
      >
        <img
          :src="src + item.backdrop_path"
          class="d-block w-100"
          :alt="item.title"
        />
        <div class="carousel-caption d-none d-md-block">
          <h3>現正熱映</h3>
          <h5>{{ item.title }}</h5>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
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
  .carousel-item {
    overflow: hidden;
    max-height: 500px;
  }
</style>