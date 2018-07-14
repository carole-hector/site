<template>
  <div class="header">

      <div class="navLink" @click="nav('all')">About</div>
      <div class="navLink" @click="nav('sweet')">Sweet</div>
      <div class="navLink" @click="nav('savoury')">Savoury</div>
      <div class="navLogo" @click="nav('all')">Carole Hector</div>

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
  display: flex;
  justify-content: left;
  align-items: center;
}
.navList {
  list-style-type: none;
}
.navLink {
    margin-left: 20px;
}
.navLink:hover {
    color: red;
    cursor: pointer;
}
.navLogo {
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  font-size: 30px;
}


</style>

