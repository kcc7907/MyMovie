<template>
  <div class="Genres">
    <h1>電影分類</h1>
    <div class="routes list-group">
      <router-link v-for="(item,index) in kind" :key="item.id" class="list-group-item text-center" :to="{ name: 'Genres', params: { userId: `${item.title}`,num:`${index}` }}">{{item.title}}</router-link>
    </div>
  </div >
</template>

<script>
export default {
  name:'Genres',
  data() {
    return {
      kind:this.$store.state.kind
    }
  },
}
</script>