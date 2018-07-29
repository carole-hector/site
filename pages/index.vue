<template>
  <section class="index-container">
      <h2 v-if="$store.state.searchValue">{{capitaliseFirst($store.state.searchValue)}}</h2>
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
      const v = this.$store.state.searchValue
      return v === "" ? this.posts : this.posts.filter((p) => this.search(p,v))
    }
  },
  methods: {
    capitaliseFirst(v) {
      return v.charAt(0).toUpperCase() + v.toLowerCase().slice(1);
    },
    search(p, v) { // if this becomes slow, reduce to tag only search
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
  width: 100%;
  max-width: 320px;
  margin-right: 5px;
  margin-left: 5px;
  border: solid 1px;
  border-color: #e0e0e0;
  background: white;
}
.index-tube img {
  width: 100%;
  height: 100%;
  max-width: 320px;
  max-height: 320px;
  background: #e0e0e0;
}
</style>
