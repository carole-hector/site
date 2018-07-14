<template>
  <div>
    <vheader/>
    <nuxt/>
    <vfooter/>
  </div>
</template>

<script>
import vheader from '~/components/vheader'
import vfooter from '~/components/vfooter'
export default {
  components: {
    vheader,
    vfooter,
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
