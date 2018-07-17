<template>
  <div class="post">
          <nuxt-link v-if="collapse" class="post" :to="`posts/${this.permalink}`">
          <div class ="border">
            <img :src="require(`@/assets/${img}`)"/>
            <div class="padding">
              <h3>{{ title }}</h3>
              <div class="text">{{ description }}</div>
              <h5>{{ date }}</h5>
            </div>
          </div>
          </nuxt-link>
        <nuxt-link v-else class="post" to="/">
          <div class="center"><h1>{{ title }}</h1></div>
          <img :src="require(`@/assets/${img}`)"/>
          <div class="padding text" v-html="bodyHtml"></div>
        </nuxt-link>
   </div>

</template>
<script>
export default {
  name: "vpost",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    date: {
      type: String
    },
    img: {
      type: String
    },
    permalink: {
      type: String
    },
    bodyHtml: {
      type: String
    },
    collapse: {
      type: Boolean
    }
  },
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
.padding {
  padding: 20px;
}
.border {
  border: solid 1px;
  border-color: #e0e0e0;
}
.center {
  text-align: center;
  font-size: 20px;
}
.text {
font-family: "quattrocento";
font-size: 18px;
}
a {
  text-decoration: none;
  color: black
}
</style>
