<template>
  <img :src="src" />
</template>

<script>
export default {
  name: "v-image",
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>
