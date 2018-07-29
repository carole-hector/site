<template>
  <div class="v-post main-font-size main-posts-max-width">
    <nuxt-link to="/">
      <div class="v-post-center">
        <h1 class="v-post-title">{{ title }}</h1>
      </div>
      <v-likes-counter :permalink="permalink" class="v-post-likes-counter"/>
      <div class="v-post-image">
       <img :src="require(`@/assets/png/${permalink}.png`)"/>
      </div>
      <div class="v-post-padding v-post-text" v-html="bodyHtml"></div>
      <v-date :date="date" style="margin-left: 8px"/>
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
  }
}
</script>

<style>
.v-post {
  text-align: left;
  margin-top: 20px;
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
.v-post-image {
  width:100%;
  height:0;
  padding-top:100%;
  position:relative;
  background: #e0e0e0;
}
.v-post-image img {
  position:absolute;
  top:0;
  left:0;
  width:100%;
}
</style>

