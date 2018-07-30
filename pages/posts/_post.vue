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
    const meta = await import(`~/static/meta/${params.post}`)
    const metaaa = await import(`~/static/meta/all`)
    const index = metaaa.default.findIndex(p => p.permalink == params.post)
    console.log(index)
    console.log(metaaa.default[index])
    return {
      body: body,
      meta: meta.default
    }
  }
}
</script>
