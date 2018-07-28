<template>
  <div class="v-post main-font-size">
    <div class="v-post main-posts-max-width">
      <div class="v-post-center">
        <div class="v-post-title-side">
        </div>
        <h1 class="v-post-title">{{ title }}</h1>
        <div class="v-post-title-side">
          <v-likes-counter :permalink="meta.permalink" class="v-post-likes-counter"/>
        </div>
      </div>
      <img :src="require(`@/assets/png/${img}`)"/>
      <div class="v-post-padding v-post-text" v-html="bodyHtml"></div>
    </div>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.v-post-title-side {
  width: 100px;
}
.v-post a {
  text-decoration: none;
  color: black
}
</style>

