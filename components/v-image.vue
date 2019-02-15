<template>
  <img :srcSet="img.srcSet" :src="img.src" />
</template>

<script>
export default {
  name: "v-image",
  props: {
    file: {
      type: String,
      required: true
    }
  },
  computed: {
    img() {
      return require(`~/assets/img/${this.file}.jpg`)
    }
  }
}
</script>
