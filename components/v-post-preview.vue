<template>
  <div class="v-post-preview">
    <nuxt-link :to="`posts/${post.permalink}`">
      <div class="v-post-preview-top">
        <img :src="require(`@/assets/jpg/${post.permalink}-preview.jpg`)"/>
      </div>
      <div class="v-post-preview-middle">
        <h3>{{ post.title }}</h3>
        <div>{{ post.description }}</div>
      </div>
      <div class="v-post-preview-bottom">
        <v-date :date="post.date" showTimeSince/>
        <v-likes-counter :permalink="post.permalink"/>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "v-post-preview",
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style>
.v-post-preview {
  width: 320px;
  font-weight: 100;
}
.v-post-preview-top {
  height: 320px;
  background: #e0e0e0;
}
.v-post-preview-middle {
  height: 180px;
  text-align: left;
  padding: 0 20px 0 20px;
}
.v-post-preview-bottom {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.v-post-preview-bottom > * {
  margin-left: 20px;
  margin-right: 20px;
}
</style>

