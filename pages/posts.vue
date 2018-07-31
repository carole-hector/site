<template>
  <section class="posts-container">
    <div class="posts-tube main-posts-max-width">
     <nuxt-child/>
    </div>
  </section>
</template>

<script>
export default {
scrollToTop: true
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
  margin: auto;
}
</style>
