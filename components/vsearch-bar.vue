<template>
  <div class ="search-bar-container">
  <input v-model="search"/>
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
.search-bar-container{
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}
.search-bar-container input {
  width: 80%;
  height: 30px;
  font-size: 16px;
  border-radius: 8px;
  background: #f8f8f8;
  border-color: #f5f4f4;
  border: 1px solid;
}
</style>
