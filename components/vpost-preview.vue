<template>
  <div class="post">
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
@import url('https://fonts.googleapis.com/css?family=quattrocento');
.post {
  text-align: left;
  font-size: 16px;
}
img {
  width: 100%;
  max-width: 700px;
}
.post-preview-padding {
  padding: 20px;
}
.post-preview-border {
  border: solid 1px;
  border-color: #e0e0e0;
}
.post-preview-text {
font-family: "quattrocento";
font-size: 18px;
}
a {
  text-decoration: none;
  color: black
}
</style>

