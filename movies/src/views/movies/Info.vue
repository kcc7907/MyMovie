<template>
  <div class="info">
    <h3 class="text-center">{{ title }}</h3>
    <div class="container-fluid p-0">
      <div class="row align-items-center">
        <div
          v-for="item in infos"
          :key="item.id"
          class="justify-content-center d-flex p-3 col-xl-3 col-lg-4 col-md-6"
        >
          <img
            :src="src + item.poster_path"
            alt=""
            class="pic"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            :title="item.title"
          />
        </div>
      </div>
    </div>
    <!-- <Pagination /> -->
  </div>
</template>

<script>
  export default {
    name: "Info",
    props: ["num", "kindApi", "title"],
    data() {
      return {
        infos: [],
        baseUrl: this.$store.state.baseUrl,
        src: this.$store.state.imgSrc,
        kindIndex: this.num,
      };
    },
    methods: {
      getMovies() {
        this.$axios.get(this.baseUrl + this.kindApi).then((res) => {
          this.infos = res.data.results;
        });
      },
    },
    mounted() {
      this.getMovies();
    },
    watch: {
      kindApi() {
        this.getMovies();
      },
    },
  };
</script>

<style>
  .pic {
    width: 250px;
    transition: 0.8s;
  }
  .pic:hover {
    transform: scale(1.02);
  }
  .tooltip {
    position: fixed;
  }
  @media screen and (max-width:576px) {
    .pic {
      width: 220px;
    }
  }
</style>