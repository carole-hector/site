<template>
  <div class="post-preview">
          <nuxt-link class="post" :to="`posts/${post.permalink}`">
            <div class ="post-preview-border">
              <img :src="require(`@/assets/png/${post.permalink}.png`)"/>
              <div class="post-preview-padding">
                <h3>{{ post.title }}</h3>
                <div class="post-preview-text">{{ post.description }}</div>
                <h5>{{ post.date }}</h5>
              </div>
            </div>
          </nuxt-link>
    </div>
</template>
<script>
export default {
  name: "vpost-preview",
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style>
.post-preview {
  text-align: left;
  font-size: 16px;
}
.post-preview-padding {
  padding: 20px;
}
.post-preview-border {
  border: solid 1px;
  border-color: #e0e0e0;
}
.post-preview-text {
font-size: 18px;
}
.post-preview a {
  text-decoration: none;
  color: black
}
</style>

