<template>
  <h5 class="v-date">
    {{ timeSince }}
  </h5>
</template>

<script>
import distanceInWordsToNow from "date-fns/distance_in_words_to_now"
export default {
  name: "v-date",
  props: {
    date: {
      type: String
    },
    showTimeSince: {
      type: Boolean
    }
  },
  computed: {
    timeSince() {
      return this.showTimeSince? `${distanceInWordsToNow(this.date)} ago` : this.date
    }
  }
}
</script>
