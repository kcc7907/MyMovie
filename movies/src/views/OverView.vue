<template>
  <div class="overview">
    <div class="container-fluid">
      <div class="row">
        <div class="poster col-3">
          {{datas.genres.length}}
        </div>
        <div class="detail col-9"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'OverView',
  props:[],
  data() {
    return {
      datas:[],
      srcOriginal:this.$store.state.src,
      srcSmall:this.$store.state.imgSrc,
      baseUrl:this.$store.state.baseUrl,
    }
  },
  methods: {
    getOverView(){
      this.$axios.get('https://api.themoviedb.org/3/movie/464052?api_key=a54618fe0fbb1c35737e9a35ec28e5de&language=zh-TW').then(res=>{
        this.datas = res.data
      })
    }
  },
  mounted() {
    this.getOverView();
  },
}
</script>

<style lang="scss">
*{
  color: white;
}
  .poster{
    border:1px solid pink;
    height: 100px;
  }
  .detail{
    border:1px solid red;
  }
</style>