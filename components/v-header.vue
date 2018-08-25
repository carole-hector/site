<template>
<div>
   <div class="v-header main-header-color">
      <div class="left">
        <nuxt-link :class="getClass('/')" to="/">All</nuxt-link>
        <nuxt-link :class="getClass('/sweet')" to="/sweet">Sweet</nuxt-link>
        <nuxt-link :class="getClass('/savoury')" to="/savoury">Savoury</nuxt-link>
      </div>
      <div class="middle">
        <nuxt-link to="/" class="nav-logo roboto">Carole Hector</nuxt-link>
      </div>
      <div class="right">

        <v-search-bar/>
        <nuxt-link :class="getClass('/about')" to="/about">About</nuxt-link>
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
      return this.$route.path === v
        ? "nav-link main-hover nav-link-selected roboto"
        : "nav-link main-hover roboto"
    }
  }
}
</script>


<style lang="stylus">

.v-header > * {
  text-align: center;
  width: 300px;
  padding-top: 15px;
  padding-bottom: 10px;
}

.v-header input {
  background: #F8F8F8
}

.v-header {
  width: 100%;
  height: 55px;
  padding: 10px 0px 10px 0px;
  display: flex;
  justify-content: space-around;

  .nav-link:hover {
    cursor: pointer;
  }
  .nav-link-selected {
    border-bottom: solid 2px;
  }
  .nav-logo {
    font-size: 38px;
    font-family: 'Waiting for the Sunrise';
  }
  .left {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

}
@media only screen and (max-width: 900px) {
  .v-header {
    justify-content: center;

    .left {
      display: none;
    }
    .right {
      display: none;
    }
  }
}
</style>

