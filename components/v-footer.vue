<template>
  <div class="v-footer main-footer-color">
    <div class="v-footer-inside main-posts-max-width">
      <nuxt-link to="/"><v-home-icon/></nuxt-link>
      <nuxt-link to="/search" class="v-footer-search"><v-search-icon/></nuxt-link>
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
.v-footer {
  position: fixed;
  bottom: 0pt;
  left: 0pt;
}
  </style>
