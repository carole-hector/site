<template>
  <section class="index-container">
      <div class="index-tube">
        <div v-for="post in filteredPosts" :key="post.permalink">
          <v-post-preview :post="post"/>
        </div>
      </div>
  </section>
</template>

<script>
import meta from "~/static/meta/all-posts.js"
export default {
  name: "index",
  data() {
    return {
      posts: meta
    }
  },
  computed: {
    filteredPosts() {
      const searchValue = this.$store.searchValue
      // const filteredArray = this.posts.map((v) => v.tags.contains(searchValue))
      return this.posts
    }
  }
}
</script>

<style>
.index-tube {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.index-tube > * {
  margin-bottom: 60px;
  width: 300px;
}
.index-tube img {
  width: 300px;
}
</style>
