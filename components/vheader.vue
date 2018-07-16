<template>
<div>
   <div class="header">
      <div class="left box">
        <div></div>
        <div class="navLink" @click="clickNav('all')">About</div>
        <div class="navLink" @click="clickNav('sweet')">Sweet</div>
        <div class="navLink" @click="clickNav('savoury')">Savoury</div>
      </div>
      <div class="middle box">
        <div class="navLogo" @click="nav('all')">Carole Hector</div>
      </div>
      <div class="right box">
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
}
.header > * {
  padding-top: 20px;
  text-align: center;
}
.navLink {
  text-decoration: underline;
}
.navLink:hover {
  color: red;
  cursor: pointer;
}
.navLogo {
  font-size: 60px;
  font-family: "Josefin Slab";
}
.navLogo:hover {
  cursor: pointer
}
.box {
  border: solid 1px;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  min-width: 250px;
}
.left {
 display: flex;
 flex-wrap: wrap;
}
@media only screen and (max-width: 900px) {
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navLogo {
    font-size: 40px;
  }
  .left {
    display: none;
  }
  .right {
    display: none;
  }
}
</style>

