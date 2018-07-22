<template>
<div>
   <div class="header">
      <div class="header-left">
        <div></div>
        <div class="header-nav-link" @click="clickNav('all')">About</div>
        <div class="header-nav-link" @click="clickNav('sweet')">Sweet</div>
        <div class="header-nav-link" @click="clickNav('savoury')">Savoury</div>
      </div>
      <div class="header-middle">
        <div class="header-nav-logo" @click="nav('all')">Carole Hector</div>
      </div>
      <div class="header-right">
        <v-search-bar/>
      </div>
  </div>
</div>

</template>

<script>
export default {
  name: "vpost",
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
@import url('https://fonts.googleapis.com/css?family=Josefin+Slab');
.header {
  width: 100%;
  min-height: 100px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.header > * {
  padding-top: 20px;
  text-align: center;
   border: solid 1px;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  min-width: 250px;
}
.header-nav-link {
  text-decoration: underline;
}
.header-nav-link:hover {
  color: red;
  cursor: pointer;
}
.header-nav-logo {
  font-size: 60px;
  font-family: "Josefin Slab";
}
.header-nav-logo:hover {
  cursor: pointer
}

.header-left {
 display: flex;
 flex-wrap: wrap;
}
@media only screen and (max-width: 900px) {
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-nav-logo {
    font-size: 40px;
  }
  .header-left {
    display: none;
  }
  .header-right {
    display: none;
  }
}
</style>

