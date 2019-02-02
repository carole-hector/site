<template>
  <div class="index">
    <div class="container">
      <div class="columns is-marginless is-multiline is-mobile">
        <div class="intro" :class="itemClass">
          <v-post-preview
            to="/about"
            title="@CaroleHector"
            description="Recipe developer and food stylist trained at Leiths."
            img="img/carolehector.png"
          />
        </div>
        <div v-for="post in posts" :key="post.slug" :class="itemClass">
          <v-post-preview
            :to="`posts/${post.slug}`"
            :title="post.title"
            :slug="post.slug"
            :date="post.date"
            :img="`img/${post.slug}.jpg`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import meta from "~/content/posts"
export default {
  name: "index",
  scrollToTop: true,
  data() {
    return {
      posts: meta.slugs.map(slug => require(`~/content/${slug}`)),
      itemClass:
        "column is-one-third-tablet is-one-third-desktop is-full-mobile padding-8-xs"
    }
  }
}
</script>
