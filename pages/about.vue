<template>
<section class="about">
  <div class="about-columns">
    <div class="about-left">
      <img :src="require(`@/assets/png/mushroom-soup.png`)"/>
    </div>
    <div class="about-right">
      <div v-html="body"></div>
    </div>
  </div>
  <div class="about-contact">
    <div>Instagram</div>
    <div>Telegram</div>
    <div>Email</div>
  </div>
</section>
</template>

<script>
import body from "~/static/content/about.md"
export default {
  name: "about",
  data() {
    return {
      body: body,
    }
  },
}
</script>


<style>
.about-columns {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.about-columns * {
  width: 100%;
  max-width: 400px;
  margin-left: 5px;
  margin-right: 5px;
}
.about-contact {
  margin: auto;
  width: 100%;
  max-width: 300px;
  text-align: center;
  display: flex;
  align: center;
  justify-content: space-around
}
</style>
