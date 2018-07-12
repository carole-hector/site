<template>
  <section class="container">
    <div class="tube">
     <nuxt-child/>
    </div>
  </section>
</template>

<script>
import vpost from "~/components/vpost.vue"
export default {
  components: {
    vpost
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
