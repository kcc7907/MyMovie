<template>
  <header>
    <nav class="d-flex navbar-expand-lg navbar-dark bg-dark align-items-end">
      <a class="navbar-brand m-0 p-0"><h2>MyMovies</h2></a>
      <div class="navbar-collapse" id="navbarSupportedContent">
        <ul class="d-flex">
          <li class="nav-item">
            <router-link :to="{ name: 'Home', params: { userId: 123 } }">
              首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Genres', params: { userId: `動作`, num: `0` } }"
            >
              電影
            </router-link>
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
    nav {
      padding: 10px;
    }
    h2 {
      margin: 0;
      font-weight: 900 !important;
    }
    a {
      margin: 0 0 0 20px;
      padding: 0;
      font-size: 20px;
    }
    .router-link-exact-active {
      color: #f7c375 !important;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
</style>