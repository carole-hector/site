<template>
  <div class ="v-search-bar-container">
    <div v-if="showHome" class="main-clickable v-search-bar-container-home" @click="$emit('home')"><v-home-icon color="fill:#e0e0e0"/></div>
    <v-search-icon color="fill:#e0e0e0"/>
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
  props: {
    showHome: {
      type: Boolean
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
  font-weight: 100;
}
@media only screen and (max-width: 663px) {
  .v-search-bar-container-home {
    display: none;
  }
}
</style>
