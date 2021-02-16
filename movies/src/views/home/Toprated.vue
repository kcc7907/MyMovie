<template>
  <div>
    
  </div>
</template>
<script>
export default {
  name:'Toprated',
  data() {
    return {
      datas:[],
    }
  },
  methods: {
    getToprated(){
      this.$axios.get(this.$store.state.requests.topRated).then(res=>{
        this.datas = res.data.results
      })
    }
  },
  mounted() {
    this.getToprated()
  },
}
</script>