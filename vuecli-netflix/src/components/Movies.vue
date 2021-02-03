<template>
  <div class="info">
    <h1>{{ title }}</h1>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div v-for="item in infos" :key="item.id" class="col-3 justify-content-center d-flex p-3">
          <img :src="src + item.poster_path" alt=""  class="pic"/>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
  import Pagination from "./Pagination.vue";

  export default {
    name: "Movies",
    data() {
      return {
        infos: [],
        src: "https://image.tmdb.org/t/p/w500",
      };
    },
    mounted() {
      this.$axios.get(this.url + this.req).then((res) => {
        this.infos = res.data.results;
      });
    },
    props: {
      url: String,
      req: String,
      title: String,
    },
    components:{
      Pagination
    }
  };
</script>

<style>
  .pic{
    height: 400px;
    transition: 1s;
  }
  .pic:hover {
    transform: scale(1.03);
  }
</style>
