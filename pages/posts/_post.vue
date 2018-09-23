<template>
  <v-post
    :body="body"
    :meta="meta"
  />
</template>

<script>
export default {
  async asyncData ({params}) {
    const body = await import(`~/static/content/${params.post}.md`)
    const allMeta = await import(`~/static/meta/all`)
    const index = allMeta.findIndex(p => p.permalink == params.post)
    const meta = allMeta[index]
    return {
      body: body,
      meta: meta
    }
  },
  mounted() {
    this.$store.state.searchValue = null
  }
}
</script>
