<template>
  <div class="default">
    <v-search-bar v-if="searchBar" showHome @home="nav('')" class="default-search-bar"/>
    <v-header v-else @nav="nav"/>
    <nuxt style="margin-bottom: 100px" />
    <v-footer @nav="nav" @showSearchBar="showSearchBar"/>
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
  data() {
    return {
      searchBar: false
    }
  },
  methods: {
    nav(v) {
      this.searchBar = false
      this.$store.commit('searchValue', v)
      this.$router.replace("/")
    },
    showSearchBar() {
      this.searchBar = true
      this.$store.commit('searchValue', "")
      window.scrollTo(0,0)
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
.default input {
  background: #e0e0e0
}
.default-search-bar * {
  margin: 5px;
}
</style>
