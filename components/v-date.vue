<template>
  <div class="v-date">
    {{ timeSince }}
  </div>
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
<style>
.v-date {
  font-size: 12px;
}
</style>

