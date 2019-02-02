<template>
  <div class="columns is-mobile is-gapless is-marginless">
    <span v-if="showIcon" class="column icon is-narrow">
      <i class="far fa-clock"/>
    </span>
    <p class="column">{{ timeSince }}</p>
  </div>
</template>

<script>
import differenceInCalendarDays from "date-fns/difference_in_calendar_days"
export default {
  name: "v-date",
  props: {
    date: {
      type: String
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    timeSince() {
      return `${differenceInCalendarDays(new Date(), this.date)}d`
    }
  }
}
</script>
