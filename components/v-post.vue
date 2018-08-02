<template>
  <div class="v-post main-posts-max-width">
    <div class="v-post-center">
      <h1 class="v-post-title">{{ title }}</h1>
    </div>
    <v-likes-counter :permalink="permalink" class="v-post-likes-counter-top"/>
    <div class="v-post-image">
      <img :src="require(`@/assets/jpg/${permalink}.jpg`)"/>
    </div>
    <div class="v-post-body" v-html="bodyHtml"></div>
    <div class="v-post-bottom">
      <v-date :date="date"/>
      <v-likes-counter :permalink="permalink"/>
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
  }
}
</script>

<style>
.v-post {
  text-align: left;
  margin-top: 20px;
}
.v-post-body {
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
.v-post-likes-counter-top {
  margin: auto;
}
.v-post-bottom {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.v-post-image {
  width:100%;
  height: 700px;
  background: #e0e0e0;
}
</style>

