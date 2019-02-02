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
      const views = this.$store.state.views
      if (views) {
        return Number(views[this.slug]) || this.register(this.slug)
      }
    }
  },
  methods: {
    register(slug) {
      this.$store.dispatch("registerSlug", slug)
    }
  }
}
</script>
