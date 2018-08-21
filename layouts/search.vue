<template>
  <div class="default">
    <v-search-bar style="margin-top: 15px"/>
    <nuxt/>
    <v-footer class="default-footer"/>
  </div>
</template>

<script>

export default {
   mounted() {
    this.$store.dispatch("fetchLikes")
  }
}
</script>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
.default input {
  background: #e0e0e0
}
.default-search-bar * {
  margin: 5px;
}
.default-footer {
  display: none;
}
@media only screen and (max-width: 900px) {
  .default-footer {
    display: block;
  }
}
</style>
