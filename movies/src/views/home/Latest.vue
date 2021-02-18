<template>
  <div>
    <h3>即將上映</h3>
    <ul class="d-flex">
      <li v-for="(item, index) in datas" :key="index" class="">
        <router-link
          :to="{
            name: 'OverView',
            params: { id: item.id, title: item.title },
          }"
        >
          <div class="latest">
            <img
              :src="src + item.poster_path"
              :alt="item.title"
              class="img-fluid"
            />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "Latest",
    data() {
      return {
        datas: [],
        src: this.$store.state.imgSrc,
      };
    },
    methods: {
      getLatest() {
        this.$axios.get(this.$store.state.requests.latest).then((res) => {
          this.datas = res.data.results.slice(0, 10);
        });
      },
    },
    mounted() {
      this.getLatest();
    },
  };
</script>

<style lang="scss" scoped>
  ul {
    padding: 0 0 5px;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;

    li {
      list-style: none;
      margin-right: 10px;
    }
    .latest {
      width: 150px;
      display: flex;
      align-items: center;
      transition: 0.8s;
      :hover {
        transform: scale(1.02);
      }
    }
  }
  @media screen and(max-width : 1200px) {
    h3 {
      text-align: center;
    }
  }
</style>