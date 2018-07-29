<template>
  <h5 class="v-date">
    {{ timeSince }} ago
  </h5>
</template>

<script>
import distanceInWordsToNow from "date-fns/distance_in_words_to_now"
export default {
  name: "v-date",
  props: {
    date: {
      type: String
    }
  },
  computed: {
    timeSince() {
      return distanceInWordsToNow(this.date)
    }
  }
}
</script>
