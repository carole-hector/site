<template>
  <v-post
    :body="body"
    :meta="meta"
  />
</template>

<script>
import vpost from "~/components/v-post.vue"
import body from "~/static/content/mushroom-soup.md"
import meta from "~/static/meta/mushroom-soup.js"

export default {
  name: "mushroom-soup",
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
