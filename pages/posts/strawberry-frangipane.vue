<template>
  <vpost
    :body="body"
    :meta="meta"
    :collapse="collapse"
  />
</template>

<script>
import vpost from "~/components/vpost.vue"
import body from "~/static/content/strawberry-frangipane.md"
import meta from "~/static/meta/strawberry-frangipane.js"

export default {
  name: "strawberry-frangipane",
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
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
