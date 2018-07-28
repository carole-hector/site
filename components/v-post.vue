<template>
  <div class="v-post main-font-size">
    <nuxt-link class="v-post main-posts-max-width" to="/">
      <div class="v-post-center"><h1>{{ title }}</h1></div>
      <img :src="require(`@/assets/png/${img}`)"/>
      <div class="v-post-padding v-post-text" v-html="bodyHtml"></div>
    </nuxt-link>
  </div>

</template>
<script>
export default {
  name: "v-post",
  props: {
    body: {
      type: String
    },
    meta: {
      type: Object
    }
  },
  data() {
    return {
      title: this.meta.title,
      date: this.meta.date,
      description: this.meta.description,
      bodyHtml: this.body,
      permalink: this.meta.permalink,
    }
  },
  computed: {
    img() {
      return `${this.permalink}.png`
    }
  }
}
</script>

<style>
.v-post {
  text-align: left;
}
.v-post-padding {
  padding: 20px;
}
.v-post-center {
  text-align: center;
}
.v-post a {
  text-decoration: none;
  color: black
}
</style>

