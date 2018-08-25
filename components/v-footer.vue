<template>
  <div class="v-footer roboto main-footer-color">
    <div class="v-footer-inside main-posts-max-width">
      <div :class="getClass('/')" ><nuxt-link to="/">All</nuxt-link></div>
      <div><nuxt-link to="/search" class="v-footer-search"><v-search-icon/></nuxt-link></div>
      <div :class="getClass('/about')"><nuxt-link to="/about">About</nuxt-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer",
  methods: {
     getClass(v) {
      return this.$route.path === v
        ? "v-footer-selected"
        : null
    }
  }
}
</script>

<style>
.v-footer {
  width: 100%;
  padding-bottom: 10px;
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
.v-footer-selected {
  border-bottom: solid 2px;
}
.v-footer-inside > *:hover {
  cursor: pointer;
}

  </style>
