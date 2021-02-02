<template>
  <div class="info">
    <h1>{{ title }}</h1>
    <ul @mousewheel="scroll">
      <li v-for="item in infos" :key="item.id">
        <img :src="src + item.poster_path" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MovieInfo",
    data() {
      return {
        infos: [],
        src: "https://image.tmdb.org/t/p/w500",
      };
    },
    mounted() {
      this.$axios.get(this.url + this.req).then((res) => {
        console.log(res.data);
        this.infos = res.data.results;
      });
    },
    props: {
      url: String,
      req: String,
      title: String,
    },
    methods: {
      scroll(e) {
        e.preventDefault();
        let width = document.querySelector("li img").width+10;
        let ul = this.$el.querySelector("ul");
        let left = parseInt(this.$el.querySelector("ul").style.left) || 0;
        if (e.wheelDelta == 120) {
          if (left == 0) {
            return false;
          } else {
            ul.style.left = `${left + width}px`;
          }
        } else if (e.wheelDelta == -120) {
          if (Math.abs(left) == width * 10) {
            return false;
          } else {
            ul.style.left = `${left - width}px`;
          }
        }
      },
    },
  };
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  .info {
    position: relative;
    height: 300px;
  }
  .info ul {
    list-style: none;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    display: grid;
    grid-auto-flow: column;
    position: absolute;
    left: 0;
    transition: 0.8s;
  }
  .info li {
    display: block;
    margin-right: 10px;
    width: 10vw;
    transition: 0.5s;
  }
  .info li:hover {
    transform: scale(1.05);
  }
</style>