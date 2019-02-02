<template>
  <transition name="fade">
    <div v-if="views" class="columns is-mobile is-gapless">
      <span class="column icon is-narrow">
        <i class="far fa-eye"/>
      </span>
      <p class="column">{{ views }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "v-views-counter",
  props: {
    slug: {
      type: String
    }
  },
  computed: {
    views() {
      if (this.$store.state.views) {
        return Number(this.$store.state.views[this.slug])
      }
    }
  },
  methods: {
    register(slug) {
      this.$store.dispatch("registerSlug", slug)
    }
  },
  mounted() {
    if (this.$store.state.views && !this.views) {
      this.register(this.slug)
    }
  }
}
</script>
