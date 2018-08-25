<template>
  <div class="index">
    <div class="banner">
      <v-carole-mini v-if="!search" class="chip"/>
    </div>
    <v-all-posts :posts="posts" :search="search"/>
  </div>
</template>

<script>
import all from "~/static/meta/all.js"
export default {
  name: "index",
  scrollToTop: true,
  data() {
    return {
      posts: all
    }
  },
  computed: {
    search() {
      return this.$store.state.searchValue
    }
  }
}
</script>

<style lang="stylus">
.index {
  .banner {
    width: 100%;
  }
  .chip {
    padding-top: 15px;
    padding-bottom: 15px;
    margin: auto
  }
}
</style>
