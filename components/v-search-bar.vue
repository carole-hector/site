<template>
  <div class ="v-search-bar-container">
  <input class="main-search-bar" v-model="search"/>
  </div>
</template>

<script>
export default {
  name: "v-search-bar",
  data() {
    return {
      search: ""
    }
  },
  methods: {
     commitSearch(v) {
      this.$store.commit('searchValue', v)
      this.$route.path === "/" ? null : this.$router.replace("/")
    }
  },
  watch: {
    search(v) {
        this.commitSearch(v)
    }
  }
}
</script>

<style>
.v-search-bar-container {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}
.v-search-bar-container input {
  width: 80%;
  height: 30px;
  border-radius: 8px;
  border: 1px solid;
}
</style>
