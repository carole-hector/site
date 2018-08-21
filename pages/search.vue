<template>
  <div>
    <v-search-bar style="margin-bottom: 15px; margin-top: 15px"/>
    <v-all-post-mini :posts="posts" :searchValue="searchValue"/>
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
      posts: all
    }
  },
  computed: {
    searchValue() {
      return this.$store.state.searchValue
    }
  }
}
</script>
