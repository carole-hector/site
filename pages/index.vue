<template>
  <section class="container">
      <div class="tube">
        <mushroomSoup v-if="show('savoury')" collapse/>
      </div>
  </section>
</template>

<script>
import mushroomSoup from "~/pages/posts/mushroom-soup.vue"
export default {
  components: {
    mushroomSoup
  },
  methods: {
    show(v) {
      return this.category === "all"
      ? true
      : v === this.category
    }
  },
  computed: {
    category() {
      return this.$store.state.headerValue
    }
  }
}
</script>

<style>
.container {
  border: none
}
.tube {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
</style>
