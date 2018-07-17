<template>
  <vpost
    :body="body"
    :meta="meta"
    :collapse="collapse"
  />
</template>

<script>
import vpost from "~/components/vpost.vue"
import body from "~/static/content/mushroom-soup.md"
import meta from "~/static/meta/mushroom-soup.js"

export default {
  name: "mushroom-soup",
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
