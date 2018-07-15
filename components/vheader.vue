<template>
  <div class="header">

      <div class="navLink" @click="clickNav('all')">About</div>
      <div class="navLink" @click="clickNav('sweet')">Sweet</div>
      <div class="navLink" @click="clickNav('savoury')">Savoury</div>
      <div class="navLogo" @click="nav('all')">Carole Hector</div>
      <input class="navSearch" v-model="search"/>

  </div>
</template>

<script>
export default {
  name: "vpost",
  data() {
    return {
      search: ""
    }
  },
  methods: {
    nav(v) {
      this.$store.commit('searchValue', v)
      this.$route.path === "/" ? null : this.$router.replace("/")
    },
    clickNav(v) {
      this.search = ""
      this.nav(v)
    }
  },
  watch: {
    search(v) {
        this.nav(v)
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
.navSearch {
  margin-left: 20px;
}


</style>

