<template>
  <div class="post" @click="redirect">

        <div v-if="collapse">
          <div class ="border">
            <img :src="require(`@/assets/${img}`)"/>
            <div class="padding">
              <h3>{{ title }}</h3>
              <div>{{ description }}</div>
              <h5>{{ date }}</h5>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="center"><h1>{{ title }}</h1></div>
          <img :src="require(`@/assets/${img}`)"/>
          <div class="padding" v-html="bodyHtml"></div>
        </div>

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
  methods: {
    redirect() {
      this.$route.path === `/posts/${this.permalink}`
      ? this.$router.replace("/")
      : this.$router.replace(`posts/${this.permalink}`)
    },
  }
}
</script>

<style>
.post {
  width: 100%;
  max-width: 700px;
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
}
.center {
  text-align: center;
  font-size: 20px;
}
</style>
