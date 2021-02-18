<template>
  <div class="Genres">
    <h3 class="text-center">電影分類</h3>
    <div class="routes list-group list-group-flush">
      <router-link
        v-for="(item, index) in kind"
        :key="item.id"
        class="list-group-item text-center"
        :to="{
          name: 'Genres',
          params: { userId: item.title, num: index },
        }"
        ><p>{{ item.title }}</p></router-link
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "Genres",
    data() {
      return {
        kind: this.$store.state.kind,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .Genres {
    p {
      margin: 0;
    }
    .list-group-item {
      background: #000 !important;
      border-color: rgba(70, 70, 70, 0.7) !important;
      :hover {
        color: white;
        background: rgba(70, 70, 70, 0.7);
      }
      &.router-link-exact-active {
        p {
          color: white !important;
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    .Genres {
      position: sticky !important;
      top: 0;
      left: 0;
    }
  }
</style>