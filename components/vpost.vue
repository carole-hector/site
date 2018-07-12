<template>
  <div class="post" @click="redirect">
      <img :src="require(`@/assets/${img}`)">
      <h2>{{title}}</h2>
      <bn>{{body}}</bn>
      <h4>{{date}}</h4>
  </div>
</template>
<script>
export default {
  name: "vpost",
  props: {
    fileName: {
      type: String
    },
    img: {
      type: String
    },
    title: {
      type: String
    },
    body: {
      type: String
    },
    date: {
      type: String
    }
  },
  methods: {
    redirect() {
      this.$router.push(`posts/${this.fileName}`);
    },
  }
}
</script>

<style>
.post {
  max-width: 700px;
  width: 100%;
  border: solid 1px;
  padding: 20px;
  text-align: left;
  margin-bottom: 60px;
}
img {
  max-width: 700px;
  width: 100%;
}
</style>
