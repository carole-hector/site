<template>
<section class="about">
    <div class="image">
      <img :src="require(`@/assets/jpg/carolehector.jpg`)"/>
    </div>
    <div class="text" v-html="body"></div>
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
  mounted() {
    this.$store.state.searchValue = null
  }
}
</script>


<style lang="stylus">

.about {
  margin-top: 20px;

  .text {
    padding: 10px
  }

  * {
    width: 100%;
    max-width: 700px;
    margin: auto;
  }
}


@media only screen and (max-width: 420px) {
  .about {
    margin-top: 0px;
  }
}

</style>
