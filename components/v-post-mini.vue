<template>
    <nuxt-link class="v-post-mini" :to="`posts/${post.permalink}`">
        <img class="image" :src="require(`@/assets/jpg/${post.permalink}-preview.jpg`)"/>
        <div class="text">
        <div>{{ post.title }}</div>
        <div class="description">{{ `${post.description.substr(0,30)}...` }}</div>
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

<style lang="stylus">

.v-post-mini {
  width: 300px;
  display: flex;

  .image {
    width: 50px;
    height: 50px;
    margin-left: 20px;
    background: #e0e0e0;
  }
  img {
    border-radius: 50%;
  }
  .middle {
    text-align: left;
  }
  .text {
    margin-left: 10px;
    font-size: 15px;
    font-style: bold;
  }
  .description {
    font-size: 12px;
  }
}

</style>

