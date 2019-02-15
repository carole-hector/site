<template>
  <nuxt-link :to="to">
    <!-- Desktop -->
    <div class="card is-hidden-mobile">
      <div class="card-image">
        <figure class="image is-square">
          <v-image :file="file"/>
        </figure>
      </div>
      <div class="card-content content is-marginless min-height-80 has-padding-12 is-medium">
        <h6 class="card-title">{{ title }}</h6>
        <p v-if="description">{{ description }}</p>
      </div>
      <div v-if="date && slug" class="card-footer">
        <div class="card-footer-item">
          <v-date :date="date" showTimeSince showIcon/>
        </div>
        <div class="card-footer-item">
          <v-views-counter slug="slug"/>
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="card is-hidden-tablet">
      <div class="columns is-mobile is-gapless is-marginless">
        <div class="column">
          <figure class="image is-square">
            <v-image :file="file"/>
          </figure>
        </div>
        <div class="column">
          <div class="card-content content has-padding-12">
            <h6 class="card-title">{{ title }}</h6>
            <p v-if="description">{{ description }}</p>
            <div v-if="date && slug" class="columns is-mobile bottom-banner">
              <div class="column is-narrow">
                <v-date :date="date" showTimeSince showIcon/>
              </div>
              <div class="column">
                <v-views-counter :slug="slug"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: "v-post-preview",
  props: {
    to: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    date: {
      type: String
    },
    slug: {
      type: String
    }
  },
  computed: {
    file() {
      return this.slug || this.image
    }
  }
}
</script>

<style>
.bottom-banner {
  position: absolute;
  bottom: 0px;
}
</style>
