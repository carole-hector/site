<template>
    <nuxt-link class="v-post-mini" :to="`posts/${post.permalink}`">
        <img class="v-post-mini-image" :src="require(`@/assets/jpg/${post.permalink}-preview.jpg`)"/>
        <div class="v-post-mini-text">
        <div>{{ post.title }}</div>
        <div class="v-post-mini-description">{{ `${post.description.substr(0,30)}...` }}</div>
        </div>
    </nuxt-link>
</template>
<script>
export default {
  name: "v-post-mini",
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style>
.v-post-mini {
  width: 300px;
  display: flex;
}
.v-post-mini-image {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  background: #e0e0e0;
}
.v-post-mini img {
  border-radius: 50%;
}
.v-post-mini-middle {
  text-align: left;
}
.v-post-mini-text {
  margin-left: 10px;
  font-size: 15px;
  font-style: bold;
}
.v-post-mini-description {
  font-size: 12px;
}

</style>

