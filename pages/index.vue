<template>
  <section class="container">
      <div class="tube">
        <mushroom-soup v-if="show('savoury, mushroom')" collapse/>
        <victoria-sponge v-if="show('sweet, cake')" collapse/>
        <mushroom-soup v-if="show('savoury, mushroom')" collapse/>
        <victoria-sponge v-if="show('sweet, cake')" collapse/>
        <mushroom-soup v-if="show('savoury, mushroom')" collapse/>
        <victoria-sponge v-if="show('sweet, cake')" collapse/>
      </div>
  </section>
</template>

<script>
export default {
  methods: {
    show(v) {
      return this.$store.state.searchValue === "all"
      ? true
      : v.includes(this.$store.state.searchValue)
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
