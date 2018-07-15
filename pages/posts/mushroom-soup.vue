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
import body from "~/static/content/mushroom-soup.md"
import meta from "~/static/meta/mushroom-soup.js"

export default {
  name: "mushroom-soup",
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
