<template>
  <div class="post" @click="redirect">
        <div v-if="collapse">
          <div class ="border">
            <img :src="require(`@/assets/${img}`)"/>
            <div class="padding">
              <h3>{{ title }}</h3>
              <div class="text">{{ description }}</div>
              <h5>{{ date }}</h5>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="center"><h1>{{ title }}</h1></div>
          <img :src="require(`@/assets/${img}`)"/>
          <div class="padding text" v-html="bodyHtml"></div>
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
      this.$store.commit('hideSearchBar')
      this.$route.path === `/posts/${this.permalink}`
      ? this.$router.replace("/")
      : this.$router.replace(`posts/${this.permalink}`)
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=maitree');
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
</style>
