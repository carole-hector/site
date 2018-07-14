<template>
  <div class="post" @click="redirect">
      <img :src="require(`@/assets/${img}`)">
      <div class="text">
        <div v-if="preview" v-html="previewHtml"></div>
        <div v-else v-html="bodyHtml"></div>
      </div>
  </div>
</template>
<script>
export default {
  name: "vpost",
  props: {
    permalink: {
      type: String
    },
    img: {
      type: String
    },
    bodyHtml: {
      type: String
    },
    previewHtml: {
      type: String
    },
    preview: {
      type: Boolean
    }
  },
  methods: {
    redirect() {
      this.$route.path === `/posts/${this.permalink}`
      ? this.$router.replace("/")
      : this.$router.replace(`posts/${this.permalink}`)
    },
  }
}
</script>

<style>
.post {
  max-width: 700px;
  width: 100%;
  border: solid 1px;
  text-align: left;
}
.text {
  padding:20px;
}
img {
  max-width: 700px;
  width: 100%;
}
</style>
