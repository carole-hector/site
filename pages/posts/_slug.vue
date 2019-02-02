<template lang="pug">
  div.container
    div.columns.is-marginless
      // Desktop
      div.column.is-4.is-hidden-mobile
        div.card
          div.card-image
            figure.is-square
              v-image(:src="img")
          div.card-content
            div.content
              h4 Ingredients
              ul
                li(v-for="ingredient in copy.ingredients" :key="ingredient" v-text="ingredient")
      div.column.is-paddingless
        // Mobile
        figure.is-square.is-hidden-tablet
          v-image(:src="img")
        // Both
        div.card-content
          div.content
            h2.title(v-text="copy.title")
            h6(v-text="subtitle")
            p(v-text="copy.description")
            // Mobile
            h4.is-hidden-tablet Ingredients
            ul.is-hidden-tablet
              li(v-for="ingredient in copy.ingredients" :key="ingredient" v-text="ingredient")
            h4 Method
            ol
              li(v-for="step in copy.method" :key="step" v-text="step")
</template>

<script>
export default {
  computed: {
    slug() {
      return this.$route.params.slug
    },
    img() {
      return `/img/${this.slug}.jpg`
    },
    copy() {
      return require(`~/content/${this.slug}`)
    },
    subtitle() {
      return [
        `Serves ${this.copy.serves}`,
        `Prep time ${this.copy.prepTime} mins`,
        `Cooking time ${this.copy.cookingTime} mins`
      ].join(" | ")
    }
  },
  mounted() {
    this.$store.dispatch("incrementViews", this.slug)
  }
}
</script>

