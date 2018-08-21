<template>
  <div class="blank">
    <nuxt style="margin-bottom: 50px"/>
    <v-footer class="blank-footer"/>
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

.blank-footer {
  display: none;
}
@media only screen and (max-width: 900px) {
  .blank-footer {
    display: block;
  }
}
</style>
