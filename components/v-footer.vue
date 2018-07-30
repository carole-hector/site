<template>
  <div class="v-footer main-footer-color">
    <div class="v-footer-inside main-posts-max-width">
      <div @click="$emit('nav','')"><v-home-icon/></div>
      <div @click="$emit('showSearchBar')"><v-search-icon/></div>
      <div @click="$emit('nav','sweet')"><v-sweet-icon/></div>
      <div @click="$emit('nav','savoury')"><v-savoury-icon/></div>
      <nuxt-link to="/about"><v-user-icon/></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer",
}
</script>

<style>
.v-footer {
  width: 100%;
  display: flex;
  align: center;
  border-top: solid 1px #e0e0e0;
}
.v-footer-inside {
  width: 100%;
  margin: 8px auto 8px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.v-footer-inside * {
  margin: auto;
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
