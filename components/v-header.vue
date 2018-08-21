<template>
<div>
   <div class="v-header main-header-color">
      <div class="v-header-left">
        <nuxt-link :class="getClass('/about')" to="/about" >About</nuxt-link>
        <nuxt-link to="/" :class="getClass('sweet')" @click.native="$emit('nav','sweet')">Sweet</nuxt-link>
        <nuxt-link to="/" :class="getClass('savoury')" @click.native="$emit('nav','savoury')">Savoury</nuxt-link>
      </div>
      <div class="v-header-middle">
        <nuxt-link to="/" class="v-header-nav-logo" @click.native="$emit('nav','')">Carole Hector</nuxt-link>
      </div>
      <div class="v-header-right">
        <v-search-bar/>
      </div>
  </div>
</div>

</template>

<script>
export default {
  name: "v-header",
  props: {
    search: {
      type: Boolean
    }
  },
  methods: {
    getClass(v) {
      return this.$store.state.searchValue === v || this.$route.path === v
        ? "v-header-nav-link main-hover v-header-nav-link-selected"
        : "v-header-nav-link main-hover"
    }
  }
}
</script>


<style>
.v-header {
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-around;
}
.v-header > * {
  text-align: center;
  width: 300px;
  margin-top: 15px;
}
.v-header input {
  background: #F8F8F8
}
.v-header-left a {
  text-decoration: none;
  color: black
}
.v-header-nav-link:hover {
  cursor: pointer;
}
.v-header-nav-link-selected {
  border-bottom: solid 2px;
}
.v-header-nav-logo {
  font-size: 38px;
}
.v-header-nav-logo:hover {
  cursor: pointer
}
.v-header-left {
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
}
@media only screen and (max-width: 900px) {
  .v-header {
    justify-content: center;
  }
  .v-header-left {
    display: none;
  }
  .v-header-right {
    display: none;
  }
}
</style>

