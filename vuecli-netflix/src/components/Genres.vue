<template>
  <div class="Genres">
    <h1>電影分類</h1>
    <ul class="list-group">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>
    <div class="routes list-group">
      <router-link v-for="(item,index) in kind" :key="item.id" class="list-group-item text-center" :to="{ name: 'Genres', params: { userId: `${item.title}`,num:`${index}` }}">{{item.title}}</router-link>
      <!-- <router-link to="/about" class="list-group-item">About</router-link> -->
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