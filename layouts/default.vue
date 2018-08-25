<template>
  <div class="default">
    <v-header @search="search" />
    <v-footer @search="search" class="default-footer"/>
    <nuxt class="nuxt"/>
  </div>
</template>

<script>

export default {
  methods: {
    search(v) {
      this.$store.commit('searchValue', v)
    }
  },
   mounted() {
    this.$store.dispatch("fetchLikes")
  }
}
</script>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.nuxt > * {
  margin: auto
}

.default-footer {
  display: none;
}

@media only screen and (max-width: 900px) {
  .default-footer {
    display: block;
  }
}
</style>
