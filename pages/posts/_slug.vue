<template>
  <div class="container">
    <div class="columns is-marginless">
      <!-- Desktop -->
      <div class="column is-4 is-hidden-mobile">
        <div class="card">
          <div class="card-image">
            <figure class="is-square">
              <v-image :src="img"/>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h3>Ingredients</h3>
              <template v-for="(subsection, index) in copy.ingredients">
                <p
                  :key="index"
                  v-if="subsection.name"
                  class="is-italic"
                >For the {{subsection.name}}:</p>
                <ul :key="index">
                  <li
                    v-for="ingredient in subsection.ingredients"
                    :key="ingredient"
                    v-text="ingredient"
                  />
                </ul>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-paddingless">
        <!-- Mobile -->
        <figure class="is-square is-hidden-tablet">
          <v-image :src="img"/>
        </figure>
        <!-- All -->
        <div class="card-content">
          <div class="content">
            <h2 class="title">{{copy.title}}</h2>
            <h6>{{subtitle}}</h6>
            <p v-text="copy.description"/>
            <!-- Mobile -->
            <h3 class="is-hidden-tablet">Ingredients</h3>
            <template v-for="(subsection, index) in copy.ingredients">
              <p
                :key="index"
                v-if="subsection.name"
                class="is-italic is-hidden-tablet"
              >For the {{subsection.name}}:</p>
              <ul :key="index" class="is-hidden-tablet">
                <li
                  v-for="ingredient in subsection.ingredients"
                  :key="ingredient"
                  v-text="ingredient"
                />
              </ul>
            </template>
            <!-- All -->
            <h3>Method</h3>
            <ol>
              <li v-for="step in copy.method" :key="step" v-text="step"/>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
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

