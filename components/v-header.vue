<template>
<div>
   <div class="v-header main-header-color">
      <div class="v-header-left">
        <nuxt-link class="v-header-nav-link main-hover" to="/about" >About</nuxt-link>
        <div class="v-header-nav-link main-hover" @click="$emit('nav','sweet')">Sweet</div>
        <div class="v-header-nav-link main-hover" @click="$emit('nav','savoury')">Savoury</div>
      </div>
      <div class="v-header-middle">
        <v-search-bar v-if="search"/>
        <div v-else class="v-header-nav-logo" @click="$emit('nav','')">Carole Hector</div>
      </div>
      <div class="v-header-right">
        <v-search-bar v-if="!search"/>
      </div>
  </div>
</div>

</template>

<script>
export default {
  name: "v-header",
  props: {
    search: {
      type: Boolean
    }
  }
}
</script>


<style>
.v-header {
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.v-header > * {
  text-align: center;
  width: 300px;
}
.v-header input {
  background: #F8F8F8
}
.v-header-left a {
  text-decoration: none;
  color: black
}
.v-header-nav-link:hover {
  cursor: pointer;
}
.v-header-nav-logo {
  font-size: 38px;
}
.v-header-nav-logo:hover {
  cursor: pointer
}
.v-header-left {
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
}
@media only screen and (max-width: 900px) {
  .v-header {
    justify-content: center;
  }
  .v-header-left {
    display: none;
  }
  .v-header-right {
    display: none;
  }
}
</style>

