<template>
  <v-post
    :body="body"
    :meta="meta"
  />
</template>

<script>
import vpost from "~/components/v-post.vue"
import body from "~/static/content/victoria-sponge.md"
import meta from "~/static/meta/victoria-sponge.js"

export default {
  name: "victoria-sponge",
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
