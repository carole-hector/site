<template>
  <section class="all-post-mini-container">
    <div class="all-post-mini-tube">
      <div v-for="post in filteredPosts" :key="post.permalink">
        <v-post-mini :post="post"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "v-all-post-mini",
  scrollToTop: true,
  props: {
    posts: {
      type: Array,
      required: true
    },
    searchValue: {
      type: String
    }
  },
  computed: {
    filteredPosts() {
      const v = this.searchValue
      return !Boolean(v) ? this.posts : this.posts.filter((p) => this.search(p,v))
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
.all-post-mini-container {
  margin-top: 20px;
}
.all-post-mini-tube {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.all-post-mini-tube > * {
  margin-bottom: 20px;
}

</style>
