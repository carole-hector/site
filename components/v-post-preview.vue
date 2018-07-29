<template>
  <div class="v-post-preview main-font-size">
          <nuxt-link :to="`posts/${post.permalink}`">
            <div class ="v-post-preview-border">
              <div class="v-post-preview-image">
                <img :src="require(`@/assets/png/${post.permalink}.png`)"/>
              </div>
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
}
.v-post-preview-padding {
  padding: 20px;
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
.v-post-preview-image {
  width:100%;
  height:0;
  padding-top:100%;
  position:relative;
  background: #e0e0e0;
}
.v-post-preview-image img {
  position:absolute;
  top:0;
  left:0;
  width:100%;
}


</style>

