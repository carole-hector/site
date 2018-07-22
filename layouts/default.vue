<template>
  <div>
    <v-search-bar v-if="showSearchBar" class="mobileSearchBar"/>
    <vheader v-else />
    <nuxt/>
    <vfooter/>
  </div>
</template>

<script>

import vheader from '~/components/vheader'
import vfooter from '~/components/vfooter'
export default {
  components: {
    vheader,
    vfooter,
  },
  computed: {
      showSearchBar() {
      return this.$store.state.showSearchBar
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Maitree');
html {
  font-family: "Maitree";
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
