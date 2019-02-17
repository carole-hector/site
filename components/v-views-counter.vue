<template>
  <transition name="fade">
    <div class="columns is-mobile is-gapless">
      <div class="column is-narrow">
        <span class="icon"> <v-icon icon="eye" /> </span>
      </div>
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
