<template>
  <div class="info">
    <h1>{{ title }}</h1>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div v-for="item in infos" :key="item.id" class="col-3 justify-content-center d-flex p-3">
          <img :src="src + item.poster_path" alt=""  class="pic" 
          data-bs-toggle="tooltip" data-bs-placement="bottom" :title="item.title"/>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
  import Pagination from "@/components/Pagination.vue";

  export default {
    name: "Movies",
    data() {
      return {
        title:'123',
        infos: [],
        src: "https://image.tmdb.org/t/p/w500",
        kindIndex:0,
        kindApi:'',
        baseUrl: this.$store.state.baseUrl
      };
    },
    methods: {
      getMovies(){
        this.$axios.get(this.baseUrl+this.kindApi).then((res) => {
          // console.log(res.data);
          this.infos = res.data.results;
        });
      }
    },
    mounted() {
      const that = this;
      this.kindApi = this.$store.state.kind[this.kindIndex].api;
      this.title = this.$store.state.kind[this.kindIndex].title;
      this.getMovies()
      let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new that.bootstrap.Tooltip(tooltipTriggerEl)
      });
    },
    beforeRouteUpdate (to, from, next) {  
      to,from;
      console.log(from);
      // this.kindIndex = this.$route.params.num;
      // console.log(this.kindIndex);
      // console.log(this.$store.state.kind[this.kindIndex]);
      // this.kindApi = this.$store.state.kind[this.kindIndex].api;
      // this.getMovies()
      // console.log(`beforeRouteUpdate`);
      next();
    },
    beforeRouteEnter (to, from, next) {
      // ...
      console.log(`beforeRouteEnter`);
      next()
    },
    components:{
      Pagination
    }
  };
</script>

<style>
  .pic{
    height: 400px;
    transition: .8s;
  }
  .pic:hover {
    transform: scale(1.02);
  }
  .tooltip{
    position: fixed;

  }
</style>
