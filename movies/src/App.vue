<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="{name:'user',params:{userId:'123',num:0}}">123</router-link>
      <router-link :to="{name:'user',params:{userId:'234',num:0}}">234</router-link>
      <router-link :to="{name:'user',params:{userId:'冒險',num:0}}">冒險</router-link>
      <router-link :to="{name:'user',params:{userId:'動作',num:0}}">動作</router-link>
      <router-link :to="{name:'user',params:{userId:'動畫',num:0}}">動畫</router-link>
    </div> -->
    <!-- <div>
      <router-link v-for="(item, index) in kind" :key="index" :to="{name:'kind',params:{kind:item.title,num:index}}">{{item.title}}</router-link>
    </div> -->
    <!-- <router-view name="a"/>
    <router-view name="b"/> -->
    <!-- <router-view name="header"> -->
    <Navbar/>
    <router-view name="Home" />
  </div>
</template>

<script>
  import Navbar from "./views/header/Navbar.vue";

  export default {
    data(){
      return{
        kind:this.$store.state.kind
      }
    },
    mounted() {
        console.log(this.kind);
    },
    components: {
        Navbar,
    },
  }
</script>

<style lang="scss">
    a{
        margin-right:5px;
    }
</style>
