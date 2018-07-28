<template>
  <div class="v-post-preview main-font-size">
          <nuxt-link :to="`posts/${post.permalink}`">
            <div class ="v-post-preview-border">
              <img :src="require(`@/assets/png/${post.permalink}.png`)"/>
              <div class="v-post-preview-padding">
                <h3>{{ post.title }}</h3>
                <div>{{ post.description }}</div>
                <div class="v-post-preview-bottom">
                  <h5>{{ post.date }}</h5>
                  <v-likes-counter :permalink="post.permalink"/>
                </div>
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
  background: white;
}
.v-post-preview-padding {
  padding: 20px;
}
.v-post-preview-border {
  border: solid 1px;
  border-color: #e0e0e0;
}
.v-post-preview-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.v-post-preview a {
  text-decoration: none;
  color: black
}
</style>

