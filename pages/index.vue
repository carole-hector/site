<template>
  <div class="index">
    <div class="container">
      <div class="columns is-marginless is-multiline is-mobile">
        <div :class="itemClass">
          <v-post-preview
            to="/about"
            title="About me"
            description="Recipe developer and food styling assistant."
            image="carolehector"
            :lazy="false"
          />
        </div>
        <div v-for="post in featured" :key="post.slug" :class="itemClass">
          <v-post-preview
            :to="`posts/${post.slug}`"
            :title="post.title"
            :views="Number(views[post.slug])"
            :date="post.date"
            :image="post.slug"
            :lazy="false"
          />
        </div>
        <div v-for="post in nonFeatured" :key="post.slug" :class="itemClass">
          <v-post-preview
            :to="`posts/${post.slug}`"
            :title="post.title"
            :views="Number(views[post.slug])"
            :date="post.date"
            :image="post.slug"
            :lazy="true"
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
    featured() {
      return this.posts.slice(0, 2)
    },
    nonFeatured() {
      return this.posts.slice(2)
    },
    views() {
      return this.$store.state.views || {}
    }
  }
}
</script>
