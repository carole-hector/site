<template>
  <img
    v-if="lazy"
    :src="img.placeholder"
    :data-srcset="img.srcSet"
    data-sizes="auto"
    :alt="alt"
    class="lazyload"
  >
  <img
    v-else
    :srcset="img.srcSet"
    :alt="alt"
    :style="background"
  >
</template>

<script>
export default {
  name: "v-image",
  props: {
    file: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean
    }
  },
  computed: {
    img() {
      return require(`~/assets/img/${this.file}.jpg`)
    },
    background() {
      return [
        `background: url(${this.img.placeholder})`,
        `no-repeat left center; background-size: cover;`
      ].join("")
    },
    alt() {
      return this.file.replace("-", " ")
    }
  }
}
</script>
