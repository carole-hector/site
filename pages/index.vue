<template>
  <v-all-post-preview :posts="posts" :searchValue="searchValue"/>
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
    searchValue() {
      return this.$store.state.searchValue
    }
  }
}
</script>
