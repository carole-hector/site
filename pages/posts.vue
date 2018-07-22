<template>
  <section class="posts-container">
    <div class="posts-tube">
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
.posts-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.posts-tube {
  width: 100%;
  max-width: 700px;
  margin: auto;
}

</style>
