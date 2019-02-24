<template>
  <img
    v-if="lazy"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    :data-srcset="img.srcSet"
    data-sizes="auto"
    :alt="alt"
    class="lazyload"
  />
  <img v-else :srcset="img.srcSet" :alt="alt" />
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
    alt() {
      return this.file.replace("-", " ")
    }
  }
}
</script>
