<template>
  <div class="post">
        <div v-if="collapse">
          <nuxt-link v-if="show" class="post" :to="`posts/${this.permalink}`">
            <div class ="border">
              <img :src="require(`@/assets/png/${img}`)"/>
              <div class="padding">
                <h3>{{ title }}</h3>
                <div class="text">{{ description }}</div>
                <h5>{{ date }}</h5>
              </div>
            </div>
          </nuxt-link>
        </div>
        <nuxt-link v-else class="post" to="/">
          <div class="center"><h1>{{ title }}</h1></div>
          <img :src="require(`@/assets/png/${img}`)"/>
          <div class="padding text" v-html="bodyHtml"></div>
        </nuxt-link>
   </div>

</template>
<script>
export default {
  name: "vpost",
  props: {
    body: {
      type: String
    },
    meta: {
      type: Object
    },
    collapse: {
      type: Boolean
    }
  },
  data() {
    return {
      title: this.meta.title,
      date: this.meta.date,
      description: this.meta.description,
      bodyHtml: this.body,
      permalink: this.meta.permalink,
    }
  },
  computed: {
    img() {
      return `${this.permalink}.png`
    },
    show() {
      const searchValue = this.$store.state.searchValue
      return searchValue === "all"
        ? true
        : this.meta.tags.includes(searchValue)
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

