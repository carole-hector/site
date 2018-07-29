<template>
  <div class="v-post main-font-size">
    <nuxt-link class="v-post main-posts-max-width" to="/">
      <div class="v-post-center">
        <h1 class="v-post-title">{{ title }}</h1>
      </div>
      <v-likes-counter :permalink="meta.permalink" class="v-post-likes-counter"/>
      <img :src="require(`@/assets/jpg/${img}`)"/>
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
      return `${this.permalink}.jpg`
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.v-post-title {
  margin: auto;
}
.v-post-likes-counter {
  margin: auto;
}
.v-post a {
  text-decoration: none;
  color: black
}
</style>

