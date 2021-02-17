<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark p-1 ps-3 align-items-end"
    >
      <a class="navbar-brand m-0 p-0"><h2>MyMovies</h2></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Home', params: { userId: 123 } }"
              >首頁</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Genres', params: { userId: `動作`, num: `0` } }"
              >電影</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<style lang="scss">
  header {
    h2 {
      margin: 0;
      font-weight: 900 !important;
    }
    a {
      margin: 0 0 0 20px;
      padding: 0;
    }
    .router-link-exact-active {
      color: #f7c375 !important;
    }
  }
</style>