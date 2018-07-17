<template>
  <section class="container">
      <div class="tube">
        <strawberry-frangipane class="smallPost" collapse/>
        <victoria-sponge class="smallPost" collapse/>
        <mushroom-soup class="smallPost" collapse/>
        <victoria-sponge class="smallPost" collapse/>
        <mushroom-soup class="smallPost" collapse/>
        <victoria-sponge class="smallPost" collapse/>
      </div>
  </section>
</template>

<script>
export default {
  name: "index"
}
</script>

<style>
.tube {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tube > * {
  margin-bottom: 60px;
}
.smallPost {
  width: 300px
}
</style>
