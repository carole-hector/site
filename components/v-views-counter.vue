<template>
  <transition name="fade">
    <div class="columns is-mobile is-gapless">
      <span class="column icon is-narrow"> <i class="far fa-eye" /> </span>
      <p class="column">{{ views }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "v-views-counter",
  props: {
    views: {
      type: Number,
      required: true
    }
  }
}
</script>
