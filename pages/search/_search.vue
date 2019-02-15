<template>
  <div class="index">
    <div class="container">
      <div class="columns is-marginless is-multiline is-mobile">
        <div v-for="post in filtered" :key="post.slug" :class="item">
          <v-post-preview
            :to="`posts/${post.slug}`"
            :title="post.title"
            :img="`/img/${post.slug}.jpg`"
            :slug="post.slug"
            :date="post.date"
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
      item: "column is-one-third-tablet is-one-quarter-desktop is-full-mobile"
    }
  },
  computed: {
    filtered() {
      const search = this.$route.params.search
      return this.posts.filter(post => post.tags.includes(search))
    }
  }
}
</script>
