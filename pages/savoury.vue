<template>
<div class="savoury">
  <v-all-posts :posts="filtered" :search="search"/>
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
    },
    filtered() {
      return this.posts.filter(post => post.tags.includes('savoury'))
    }
  }
}
</script>
