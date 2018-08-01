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
  scrollToTop: true,
  data() {
    return {
      posts: all
    }
  },
  computed: {
    filteredPosts() {
      const v = this.$store.state.searchValue
      return v === "" ? this.posts : this.posts.filter((p) => this.search(p,v))
    }
  },
  methods: {
    capitaliseFirst(v) {
      return v.charAt(0).toUpperCase() + v.toLowerCase().slice(1);
    },
    search(p, v) {
      const u = this.capitaliseFirst(v)
      const w = v.toLowerCase()
      function includes(p, u, v, w) {
        return p.includes(v) || p.includes(u) || p.includes(w)
      }
      return includes(p.tags, u, v, w) || includes(p.title, u, v, w) || includes(p.description, u, v, w)
    }
  }
}
</script>

<style>
.index-container {
  margin-top: 20px;
}
.index-container > h2 {
  text-align: center;
}
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
  margin-right: 5px;
  margin-left: 5px;
  border: solid 1px;
  border-color: #e0e0e0;
  background: white;
}
@media only screen and (max-width: 340px) {
.index-container {
  margin: 0px;
}
.index-tube > * {
  margin-bottom: 40px;
  border: none;
  background: none;
}
}
</style>
