<template>
  <div class="v-footer main-cover">
    <div class="v-footer-inside main-posts-max-width">
      <div @click="nav('')"><v-home-icon/></div>
      <div @click="showSearchBar"><v-search-icon/></div>
      <div @click="nav('sweet')"><v-sweet-icon/></div>
      <div @click="nav('savoury')"><v-savoury-icon/></div>
      <nuxt-link to="/about"><v-user-icon/></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer",
  methods: {
    nav(v) {
      this.$store.commit('hideSearchBar')
      this.$store.commit('searchValue', v)
      this.$router.replace("/")
      window.scrollTo(0,0)
    },
    showSearchBar() {
      this.$store.commit('showSearchBar')
      this.$store.commit('searchValue', "")
      window.scrollTo(0,0)
    }
  }
}
</script>

<style>
.v-footer {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.v-footer-inside {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.v-footer-inside > *:hover {
  cursor: pointer;
}
@media only screen and (max-width: 900px) {
   .v-footer {
    position: fixed;
    bottom: 0pt;
    left: 0pt;
  }
}
</style>
