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
import all from "~/static/meta/all.js"
export default {
  name: "index",
  data() {
    return {
      posts: all
    }
  },
  computed: {
    filteredPosts() {
      const s = this.$store.state.searchValue
      return s === "" ? this.posts : this.posts.filter((p) => this.search(p,s))
    }
  },
  methods: {
    search(p, s) {
      return p.tags.includes(s) ||
             p.title.includes(s) ||
             p.description.includes(s)
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
  width: 100%;
  max-width: 320px;
  margin-right: 5px;
  margin-left: 5px;
}
.index-tube img {
  width: 100%;
  max-width: 320px;
}
</style>
