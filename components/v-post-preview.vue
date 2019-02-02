<template lang="pug">
  nuxt-link(:to='to')
    // Desktop
    div.card.is-hidden-mobile
      div.card-image
        figure.image.is-square
          v-image(:src='img')
      div.card-content.content.is-marginless.min-height-80.padding-12.is-medium
        h6.card-title(v-text='title')
        p(v-if="description", v-text='description')
      div.card-footer(v-if="date && slug")
        div.card-footer-item
          v-date(:date='date', showTimeSince, showIcon)
        div.card-footer-item
          v-views-counter(:slug='slug')
    // Mobile
    div.card.is-hidden-tablet
      div.columns.is-mobile.is-gapless.is-marginless
        div.column
          figure.image.is-square
            v-image(:src='img')
        div.column
          div.card-content.content.padding-12
            h6.card-title(v-text='title')
            p(v-if="description", v-text='description')
            div.columns.is-mobile.bottom-banner(v-if="date && slug").is-size-7
              div.column.is-narrow
                v-date(:date='date', showTimeSince, showIcon)
              div.column
                v-views-counter(:slug='slug')
</template>
<script>
export default {
  name: "v-post-preview",
  props: {
    to: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
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
  }
}
</script>

<style>
.bottom-banner {
  position: absolute;
  bottom: 0px;
}
</style>

