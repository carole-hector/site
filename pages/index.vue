<template>
  <div class="index">
    <div class="container">
      <div class="columns is-marginless is-multiline is-mobile">
        <div :class="itemClass">
          <v-post-preview
            to="/about"
            title="About me"
            description="London based recipe developer and food styling assistant."
            image="carolehector"
            :lazy="false"
          />
        </div>
        <div v-for="(post, index) in posts" :key="post.slug" :class="itemClass">
          <v-post-preview
            :to="`posts/${post.slug}`"
            :title="post.title"
            :views="post.views"
            :date="post.date"
            :image="post.slug"
            :lazy="!isFeatured(index)"
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
  data() {
    return {
      posts: POST_PREVIEWS,
      itemClass:
        "column is-one-third-tablet is-one-third-desktop is-full-mobile has-padding-8-on-mobile"
    }
  },
  methods: {
    isFeatured(index) {
      return index <= 1
    }
  }
}
</script>
