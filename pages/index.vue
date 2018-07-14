<template>
  <section class="container">
      <div class="tube">
        <mushroomSoup v-if="show('savoury')" collapse/>
        <victoriaSponge v-if="show('sweet')" collapse/>
      </div>
  </section>
</template>

<script>
import mushroomSoup from "~/pages/posts/mushroom-soup.vue"
import victoriaSponge from "~/pages/posts/victoria-sponge.vue"
export default {
  components: {
    mushroomSoup,
    victoriaSponge
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
.tube > * {
  margin-bottom: 60px;
}
</style>
