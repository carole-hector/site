<template>
  <section class="container">
    <div class="tube">
      <mushroomSoup v-if="savoury" preview/>
    </div>
  </section>
</template>

<script>
import mushroomSoup from "~/pages/posts/mushroom-soup.vue"
export default {
  data() {
    return {
      savoury: true,
      sweet: true,
      thoughts: true,
    }
  },
  components: {
    mushroomSoup,
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.tube {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
</style>
