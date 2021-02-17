<template>
  <div id="app">
    <Header />
    <router-view name="Home" />
    <router-view name="Movies" />
    <router-view name="OverView" />
    <footer class="container text-center"><p>Copyright © All Rights Reserved</p></footer>
  </div>
</template>

<script>
  import Header from "./views/header/Header.vue";

  export default {
    name: "Index",
    data() {
      return {
        kind: this.$store.state.kind,
      };
    },
    mounted() {},
    components: {
      Header,
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300&display=swap');
  *{
    font-family: 'Noto Serif TC', serif;
  }
  a {
    margin-right: 5px;
    color: white !important;
    text-decoration: none !important;
  }
  body{
    background: #000 !important;
  }
  .list-group-item{
    background: #000 !important;
    border-color:rgba(70, 70, 70, 0.7) !important;
    :hover{
      color: white;
      background:rgba(70, 70, 70, 0.7);
    }
  }
  p{
    color: #a2a2a2;
  }
  h3{
    color: #ffa31a;
  }
    /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(70, 70, 70, 0.7);
    border-radius: 10px;
  }
</style>