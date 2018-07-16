<template>
  <div class="footer">
    <div class="footerInside">
      <div @click="clickNav('sweet')"><v-sweet-icon /></div>
      <div @click="clickNav('savoury')"><v-sweet-icon/></div>
      <div @click="showSearchBar"><v-search-icon/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vpost",
  methods: {
    top() {
      window.scrollTo(0,0)
    }
  },
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
.footer {
  width: 100%;
  height: 70px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footerInside {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footerBox {
  width: 30%;
  border: 1px solid;
  text-align: center;
}
.footerSearch {
  text-align: left;
  min-width: 120px;
}
@media only screen and (max-width: 900px) {
   .footer {
    position: fixed;
    bottom: 0pt;
    left: 0pt;
  }
}
</style>
