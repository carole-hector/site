<template>
<div>
   <div class="v-header main-header-color">
      <div class="v-header-left">
        <nuxt-link class="v-header-nav-link main-hover" to="/about">About</nuxt-link>
        <div class="v-header-nav-link main-hover" @click="$emit('nav','sweet')">Sweet</div>
        <div class="v-header-nav-link main-hover" @click="$emit('nav','savoury')">Savoury</div>
      </div>
      <div class="v-header-middle">
        <div class="v-header-nav-logo" @click="$emit('nav','')">Carole Hector</div>
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
}
</script>


<style>
.v-header {
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.v-header > * {
  text-align: center;
  align-items: center;
  justify-content: space-around;
  max-width: 350px;
  min-width: 250px;
}
.v-header-nav-link {
  font-size: 18px
}
.v-header-left a {
  text-decoration: none;
  color: black
}
.v-header-nav-link:hover {
  cursor: pointer;
}
.v-header-nav-logo {
  font-size: 40px;
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

