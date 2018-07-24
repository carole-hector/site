<template>
<div>
   <div class="v-header main-cover">
      <div class="v-header-left">
        <div></div>
        <div class="v-header-nav-link main-hover" @click="nav('')">About</div>
        <div class="v-header-nav-link main-hover" @click="nav('sweet')">Sweet</div>
        <div class="v-header-nav-link main-hover" @click="nav('savoury')">Savoury</div>
      </div>
      <div class="v-header-middle">
        <div class="v-header-nav-logo" @click="nav('')">Carole Hector</div>
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
      this.$store.commit('hideSearchBar')
      this.$store.commit('searchValue', v)
      this.$router.replace("/")
    }
  }
}
</script>


<style>
.v-header {
  width: 100%;
  min-height: 100px;
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

