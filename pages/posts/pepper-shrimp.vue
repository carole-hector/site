<template>
  <v-post
    :body="body"
    :meta="meta"
  />
</template>

<script>
import vpost from "~/components/v-post.vue"
import body from "~/static/content/pepper-shrimp.md"
import meta from "~/static/meta/pepper-shrimp.js"

export default {
  name: "pepper-shrimp",
  data() {
    return {
      body: body,
      meta: meta
    }
  },
  components: {
    vpost
  }
}
</script>
