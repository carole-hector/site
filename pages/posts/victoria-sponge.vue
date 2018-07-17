<template>
  <vpost
    :title="title"
    :date="date"
    :description="description"
    :img="img"
    :bodyHtml="bodyHtml"
    :permalink="permalink"
    :collapse="collapse"
  />
</template>

<script>
import vpost from "~/components/vpost.vue"
import body from "~/static/content/victoria-sponge.md"
import meta from "~/static/meta/victoria-sponge.js"

export default {
  name: "victoria-sponge",
  data() {
    return {
      title: meta.title,
      date: meta.date,
      description: meta.description,
      bodyHtml: body,
      permalink: meta.permalink,
    }
  },
  computed: {
    img() {
      return `${this.permalink}.png`
    }
  },
  components: {
    vpost
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  }
}
</script>
