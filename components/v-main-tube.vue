<template>
  <section class="main-tube-container">
    <div class="main-tube-tube">
      <div v-for="post in filteredPosts" :key="post.permalink">
        <v-post-preview :post="post"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "v-main-tube",
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
.main-tube-container {
  margin-top: 20px;
}
.main-tube-container > h2 {
  text-align: center;
}
.main-tube-tube {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.main-tube-tube > * {
  margin-bottom: 60px;
  margin-right: 5px;
  margin-left: 5px;
  border: solid 1px;
  border-color: #e0e0e0;
  background: white;
}
@media only screen and (max-width: 340px) {
.main-tube-container {
  margin: 0px;
}
.main-tube-tube > * {
  margin-bottom: 40px;
  border: none;
  background: none;
}
}
</style>
