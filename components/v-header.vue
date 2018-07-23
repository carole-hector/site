<template>
<div>
   <div class="v-header">
      <div class="v-header-left">
        <div></div>
        <div class="v-header-nav-link" @click="clickNav('all')">About</div>
        <div class="v-header-nav-link" @click="clickNav('sweet')">Sweet</div>
        <div class="v-header-nav-link" @click="clickNav('savoury')">Savoury</div>
      </div>
      <div class="v-header-middle">
        <div class="v-header-nav-logo" @click="nav('all')">Carole Hector</div>
      </div>
      <div class="v-header-right">
        <v-search-bar/>
      </div>
  </div>
</div>

</template>

<script>
export default {
  name: "v-header",
  methods: {
    nav(v) {
      this.$store.commit('searchValue', v)
      this.$route.path === "/" ? null : this.$router.replace("/")
    },
    clickNav(v) {
      this.$store.commit('hideSearchBar')
      this.search = ""
      this.nav(v)
    }
  }
}
</script>


<style>
.v-header {
  width: 100%;
  min-height: 100px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.v-header > * {
  padding-top: 20px;
  text-align: center;
   border: solid 1px;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  min-width: 250px;
}
.v-header-nav-link {
  text-decoration: underline;
}
.v-header-nav-link:hover {
  color: red;
  cursor: pointer;
}
.v-header-nav-logo {
  font-size: 50px;
}
.v-header-nav-logo:hover {
  cursor: pointer
}
.v-header-left {
 display: flex;
 flex-wrap: wrap;
}
@media only screen and (max-width: 900px) {
  .v-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .v-header-nav-logo {
    font-size: 40px;
  }
  .v-header-left {
    display: none;
  }
  .v-header-right {
    display: none;
  }
}
</style>

