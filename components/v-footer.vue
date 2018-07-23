<template>
  <div class="v-footer">
    <div class="v-footer-inside">
      <div @click="clickNav('sweet')"><v-sweet-icon/></div>
      <div @click="clickNav('savoury')"><v-sweet-icon/></div>
      <div @click="showSearchBar"><v-search-icon/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer",
  methods: {
    nav(v) {
      this.$store.commit('searchValue', v)
      this.$route.path === "/" ? null : this.$router.replace("/")
    },
    clickNav(v) {
      this.$store.commit('hideSearchBar')
      this.nav(v)
      window.scrollTo(0,0)
    },
    showSearchBar() {
      this.$store.commit('showSearchBar')
      window.scrollTo(0,0)
    }
  }
}
</script>

<style>
.v-footer {
  width: 100%;
  height: 70px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.v-footer-inside {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media only screen and (max-width: 900px) {
   .v-footer {
    position: fixed;
    bottom: 0pt;
    left: 0pt;
  }
}
</style>
