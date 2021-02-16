<template>
  <div id="app">
    <Header />
    <router-view name="Home" />
    <router-view name="Movies" />
    <footer class="container text-center"><strong>Copyright © All Rights Reserved</strong></footer>
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

<style lang="scss" scoped>
  a {
    margin-right: 5px;
  }
</style>