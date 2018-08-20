<template>
  <div class ="v-search-bar-container">
    <v-search-icon color="fill:#e0e0e0"/>
    <input class="main-search-bar" @input="$router.replace('/')" @blur="$emit('searchBlur')" v-model="search"/>
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
    search(searchValue) {
      this.$store.commit('searchValue', searchValue)
    }
  }
}
</script>

<style>
.v-search-bar-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-search-bar-container > * {
  margin-left: 8px;
  margin-right: 8px;
}
.v-search-bar-container input {
  width: 150px;
  height: 30px;
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 18px;
  font-weight: 400;
  background: #eeeeee;
}
</style>
