<template>
  <div class="badge">
    <svg height="30px" viewBox="0 0 24 24" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="12" cy="7" fill="none" r="4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
  </div>
</template>

<script>
export default {
  name: "v-user-icon",
  props: {
    scale: {
      type: Number,
      default: 1
    },
    fill: {
      type: String
    }
  }
}
</script>

<style>
.badge {
  display: block;
  flex: 0 0 auto;
}
  svg {
    display: block;
  }

</style>
