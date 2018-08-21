<template>
  <v-main-tube :posts="posts" :searchValue="searchValue"/>
</template>

<script>
import all from "~/static/meta/all.js"
export default {
  name: "search",
  layout: 'search',
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
