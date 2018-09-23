<template>
    <nuxt-link class="v-post-mini" :to="`posts/${post.permalink}`">
        <div>
          <img class="image" v-lazy="require(`@/assets/jpg/${post.permalink}.jpg`)"/>
        </div>
        <div class="text">
        <div>{{ truncate(post.title, 40) }}</div>
        <div class="description">{{ truncate(post.description, 30) }}</div>
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
  },
  methods: {
    truncate(v, l) {
      return v.length < l ? v : `${v.substr(0,l)}...`
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

