<template>
  <div class="v-post-preview">
          <nuxt-link :to="`posts/${post.permalink}`">
            <div class ="v-post-preview-border">
              <img :src="require(`@/assets/png/${post.permalink}.png`)"/>
              <div class="v-post-preview-padding">
                <h3>{{ post.title }}</h3>
                <div>{{ post.description }}</div>
                <h5>{{ post.date }}</h5>
              </div>
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
  text-align: left;
  font-size: 18px;
}
.v-post-preview-padding {
  padding: 20px;
}
.v-post-preview-border {
  border: solid 1px;
  border-color: #e0e0e0;
}
.v-post-preview a {
  text-decoration: none;
  color: black
}
</style>

