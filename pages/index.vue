<template>
  <section class="container">
    <div class="tube">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      savoury: true,
      sweet: true,
      thoughts: true,
    }
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
