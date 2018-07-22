<template>
  <div class="post">
    <nuxt-link class="post" to="/">
      <div class="post-center"><h1>{{ title }}</h1></div>
      <img :src="require(`@/assets/png/${img}`)"/>
      <div class="post-padding post-text" v-html="bodyHtml"></div>
    </nuxt-link>
  </div>

</template>
<script>
export default {
  name: "vpost",
  props: {
    body: {
      type: String
    },
    meta: {
      type: Object
    },
    collapse: {
      type: Boolean
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
@import url('https://fonts.googleapis.com/css?family=quattrocento');
.post {
  text-align: left;
  font-size: 16px;
}
img {
  width: 100%;
  max-width: 700px;
}
.post-padding {
  padding: 20px;
}
.post-center {
  text-align: center;
  font-size: 20px;
}
.post-text {
font-family: "quattrocento";
font-size: 18px;
}
a {
  text-decoration: none;
  color: black
}
</style>

