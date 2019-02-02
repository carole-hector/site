<template>
  <transition name="fade">
    <div v-if="likes" class="columns is-mobile is-gapless" @click.prevent="incrementLikes">
      <span class="column icon is-narrow">
        <i class="far fa-eye"/>
      </span>
      <p class="column">{{ likes }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "v-likes-counter",
  props: {
    slug: {
      type: String
    }
  },
  computed: {
    likes() {
      if (this.$store.state.likes) {
        const thisLikes = Number(this.$store.state.likes[this.slug])
        thisLikes ? null : this.$store.dispatch("registerSlug", this.slug)
        return thisLikes
      } else {
        return null
      }
    }
  },
  methods: {
    async incrementLikes() {
      await this.$store.dispatch("incrementLikes", this.slug)
    }
  }
}
</script>
