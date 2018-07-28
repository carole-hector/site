<template>
  <div class ="v-search-bar-container">
    <v-search-icon style="fill:#e0e0e0"/>
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
  watch: {
    search(v) {
      this.$store.commit('searchValue', v)
      this.$router.replace("/")
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
.v-search-bar-container > * {
  min-width: 40px;
}
.v-search-bar-container input {
  width: 80%;
  height: 30px;
  border-radius: 8px;
}
</style>
