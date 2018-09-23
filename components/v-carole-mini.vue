<template>
    <nuxt-link class="v-carole-mini" to="/about">
        <img class="image" v-lazy="require(`@/assets/jpg/carolehector.jpg`)"/>
        <div class="text">
          <div>Recipe developer based in London. 🇬🇧🇹🇹</div>
        </div>
    </nuxt-link>
</template>
<script>
export default {
  name: "v-carole-mini",
}
</script>

<style lang="stylus">

.v-carole-mini img {
  border-radius: 50%;
}

.v-carole-mini {
  display: flex;
  width: 80%;
  max-width: 400px;

  .image {
    width: 90px
    height: 90px
    flex-shrink: 0;
    background: #e0e0e0;
  }
  .middle {
    text-align: left;
  }
  .text {
    margin-left: 10px;
    font-size: 15px;
    font-style: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>

