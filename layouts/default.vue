<template>
  <div>
    <v-search-bar v-if="showSearchBar"/>
    <v-header v-else />
    <nuxt style="margin-bottom: 40px"/>
    <v-footer/>
  </div>
</template>

<script>

import vheader from '~/components/v-header'
import vfooter from '~/components/v-footer'
export default {
  components: {
    vheader,
    vfooter,
  },
  computed: {
      showSearchBar() {
      return this.$store.state.searchBar
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
</style>
