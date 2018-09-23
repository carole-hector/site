<template>
    <div class="about">
      <div class="image">
        <img v-lazy="require(`@/assets/jpg/carolehector.jpg`)"/>
      </div>
      <div class="text" v-html="body"></div>
    </div>
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
  mounted() {
    this.$store.state.searchValue = null
  }
}
</script>


<style lang="stylus">
.about {
  margin: auto
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .image {
    margin-top: 20px;
    width: 300px;
    height: 300px;
    background: #e0e0e0
  }

  .text {
    padding: 0px 15px 15px 15px;
  }

}
</style>
