<template>
  <div>
    
  </div>
</template>
<script>
export default {
  name:'Latest',
  data() {
    return {
      datas:[],
    }
  },
  methods: {
    getLatest(){
      this.$axios.get(this.$store.state.requests.latest).then(res=>{
        this.datas = res.data.results.slice(0,10)
      })
    }
  },
  mounted() {
    this.getLatest()
  },
}
</script>