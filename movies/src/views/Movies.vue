<template>
  <div class="movies">
    <div class="container-fluid">
      <div class="row">
        <div class="tabs col-md-2 col-4">
          <Genres />
        </div>
        <div class="main col-md-10 col-8">
          <Info :num="num" :kindApi="kindApi" :title="title"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Genres from "./movies/Genres.vue";
  import Info from "./movies/Info.vue";

  export default {
    name: "Movies",
    props: ["userId", "num",],
    components: {
      Genres,
      Info,
    },
    computed: {
      kindApi(){
        return this.$store.state.kind[this.num].api
      },
      title(){
        return this.$store.state.kind[this.num].title
      },
    },
    beforeRouteUpdate(to, from, next) {
      // to,from;
      next();
    },
    beforeRouteEnter(to, from, next) {
      // ...
      next();
    },
  };
</script>

<style lang="scss" scoped>
  .movies{
    margin-top: 10px;
    .tabs{
      position: relative;
    }
  }
</style>