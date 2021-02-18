<template>
  <div class="rated">
    <h3 class="text-center">排行榜</h3>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item "
        v-for="(item, index) in datas"
        :key="index"
      >
        <router-link
          :to="{
            name: 'OverView',
            params: { id: item.id, title: item.title },
          }"
          class="d-flex align-items-center justify-content-between"
        >
          <p>{{ index + 1 }}. {{ item.title.slice(0, 25) }}</p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffa31a"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
            {{ item.vote_average }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "Toprated",
    data() {
      return {
        datas: [],
      };
    },
    methods: {
      getToprated() {
        this.$axios.get(this.$store.state.requests.topRated).then((res) => {
          this.datas = res.data.results.slice(0, 10);
        });
      },
    },
    mounted() {
      this.getToprated();
    },
  };
</script>

<style lang="scss" scoped>
  .rated {
    overflow: auto;
    height: 300px;
    .list-group {
      p {
        margin: 0;
      }
    }
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
    background: rgba(70, 69, 69, 0.739);
    border-radius: 10px;
  }
</style>