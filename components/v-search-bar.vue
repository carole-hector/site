<template>
  <div class ="v-search-bar-container">
    <nuxt-link to="/search">
      <v-search-icon color="e0e0e0"/>
    </nuxt-link>
    <input
      class="main-search-bar"
      autocapitalize="none"
      autocorrect="off"
      @input="$emit('search', search)"
      v-model="search"/>
  </div>
</template>

<script>
export default {
  name: "v-search-bar",
  data() {
    return {
      search: null
    }
  },
  watch: {
    search(v) {
      this.$store.commit('searchValue', v)
    }
  }
}
</script>

<style>
.v-search-bar-container {
  width: 200px;
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
  height: 25px;
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 16px;
  font-weight: 400;
  background: #eeeeee;
}
</style>
