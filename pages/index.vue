<template>
  <div class="index">
    <div class="container">
      <div class="columns is-marginless is-multiline is-mobile">
        <div class="intro" :class="itemClass">
          <v-post-preview
            to="/about"
            title="About me"
            description="Recipe developer and food styling assistant."
            image="carolehector"
          />
        </div>
        <div v-for="post in posts" :key="post.slug" :class="itemClass">
          <v-post-preview
            :to="`posts/${post.slug}`"
            :title="post.title"
            :views="Number(views[post.slug])"
            :date="post.date"
            :image="post.slug"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { slugs } from "~/content/posts"
export default {
  name: "index",
  scrollToTop: true,
  data() {
    return {
      posts: slugs.map(slug => require(`~/content/${slug}`)),
      itemClass:
        "column is-one-third-tablet is-one-third-desktop is-full-mobile has-padding-8-on-mobile"
    }
  },
  computed: {
    views() {
      return this.$store.state.views || {}
    }
  }
}
</script>
