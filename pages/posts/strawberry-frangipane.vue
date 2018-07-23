<template>
  <v-post
    :body="body"
    :meta="meta"
  />
</template>

<script>
import vpost from "~/components/v-post.vue"
import body from "~/static/content/strawberry-frangipane.md"
import meta from "~/static/meta/strawberry-frangipane.js"

export default {
  name: "strawberry-frangipane",
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
