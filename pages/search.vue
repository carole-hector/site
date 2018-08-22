<template>
    <div class="search">
      <nuxt-link class="back-arrow" to="/"><v-back-arrow-icon/></nuxt-link>
      <v-search-bar class="search-bar" @search="search = $event"/>
      <v-all-posts mini :posts="posts" :search="search"/>
    </div>
</template>

<script>
import all from "~/static/meta/all.js"
export default {
  name: "search",
  layout: 'blank',
  scrollToTop: true,
  data() {
    return {
      posts: all,
      search: null
    }
  }
}
</script>

<style lang="stylus">
.search {
  .search-bar {
    margin: auto;
    padding-top: 15px;
  }
  .back-arrow {
    position: absolute;
    top:15px;
    left:15px;
  }
}
</style>

