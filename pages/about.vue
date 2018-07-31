<template>
<section class="about">
  <div class="about-columns">
    <div class="about-left">
      <img :src="require(`@/assets/jpg/carolehector.jpg`)"/>
    </div>
    <div class="about-right">
      <div v-html="body"></div>
      <a class="main-styled-link" href="https://instagram.com/carolehector" target="_blank">Instagram</a>
    </div>
  </div>
  <div class="about-contact">
  </div>
</section>
</template>

<script>
import body from "~/static/content/about.md"
export default {
  name: "about",
  scrollToTop: true,
  data() {
    return {
      body: body,
    }
  },
}
</script>


<style>
.about {
  margin-top: 20px;
}
.about-columns {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.about-columns > * {
  width: 100%;
  max-width: 400px;
}
.about-right {
  margin: 20px;
}
.about-contact {
  margin: 40px auto 0px auto;
  width: 100%;
  max-width: 300px;
  text-align: center;
  display: flex;
  align: center;
  justify-content: space-around;
}
</style>
