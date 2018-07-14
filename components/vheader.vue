<template>
  <div class="header">
    <button @click="nav('all')">Home</button>
    <button @click="nav('sweet')">Sweet</button>
    <button @click="nav('savoury')">Savoury</button>
  </div>
</template>

<script>
export default {
  name: "vpost",
  methods: {
    nav(v) {
      this.$store.commit('headerValue', v)
      this.$route.path === "/" ? null : this.$router.replace("/")
    }
  }
}
</script>


<style>
.header {
  width: 100%;
  height: 70px;
  background: #f4f4f4;
  margin: 0px 0px 20px 0px;
  padding: 0px
}
</style>

