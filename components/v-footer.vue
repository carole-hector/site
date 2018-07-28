<template>
  <div class="v-footer main-cover">
    <div class="v-footer-inside main-posts-max-width">
      <div @click="nav('')"><v-home-icon/>Home</div>
      <div @click="showSearchBar"><v-search-icon/>Search</div>
      <div @click="nav('sweet')"><v-sweet-icon/>Sweet</div>
      <div @click="nav('savoury')"><v-savoury-icon/>Savoury</div>
      <nuxt-link to="/about"><v-user-icon/>About</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer",
  methods: {
    nav(v) {
      this.$store.commit('searchBar', false)
      this.$store.commit('searchValue', v)
      this.$router.replace("/")
      window.scrollTo(0,0)
    },
    showSearchBar() {
      this.$store.commit('searchBar', true)
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
  margin-top: 20px;
  display: flex;
  align: center
}
.v-footer-inside {
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.v-footer-inside * {
  margin: auto;
}
.v-footer-inside a {
  color: #000000;
  text-decoration: none;
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
