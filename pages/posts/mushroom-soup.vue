<template>
  <vpost
    :permalink="permalink"
    :bodyHtml="bodyHtml"
    :previewHtml="previewHtml"
    :img="img"
    :preview="preview"
  />
</template>

<script>
import vpost from "~/components/vpost.vue"
import body from "~/static/content/mushroom-soup.md"
import preview from "~/static/content/preview/mushroom-soup.md"

export default {
  data() {
    return {
      title: "Mushroom Soup",
    }
  },
  computed: {
    permalink() {
      return this.title.toLowerCase().replace(/ /g, '-')
    },
    img() {
      return `${this.permalink}.png`
    },
    bodyHtml() {
      return body
    },
    previewHtml() {
      return preview
    }
  },
  components: {
    vpost
  },
  props: {
    preview: {
      type: Boolean,
      default: false
    }
  }
}
</script>
