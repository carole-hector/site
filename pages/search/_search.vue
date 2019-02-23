<template>
  <div class="index">
    <div class="container">
      <div class="columns is-marginless is-multiline is-mobile">
        <div v-for="(post, index) in filtered" :key="post.slug" :class="item">
          <v-post-preview
            :to="`/posts/${post.slug}`"
            :title="post.title"
            :image="post.slug"
            :views="Number(views[post.slug])"
            :date="post.date"
            :lazy="index > lazyIndex"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import POST_PREVIEWS from "~/content/post-previews.json"

export default {
  name: "index",
  scrollToTop: true,
  validate({ params }) {
    return ["sweet", "savoury"].includes(params.search)
  },
  data() {
    return {
      posts: POST_PREVIEWS,
      item: "column is-one-third-tablet is-one-quarter-desktop is-full-mobile",
      lazyIndex: 4
    }
  },
  computed: {
    filtered() {
      const search = this.$route.params.search
      return this.posts.filter(post => post.tags.includes(search))
    },
    views() {
      return this.$store.state.views || {}
    }
  }
}
</script>
