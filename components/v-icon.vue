<template>
  <component :is="is" width="16" height="16" :fill="fill" />
</template>

<script>
import VClock from "~/assets/svg/clock.svg"
import VCookieBite from "~/assets/svg/cookie-bite.svg"
import VDrumstickBite from "~/assets/svg/drumstick-bite.svg"
import VEnvelope from "~/assets/svg/envelope.svg"
import VEye from "~/assets/svg/eye.svg"
import VInstagram from "~/assets/svg/instagram.svg"
import VPhone from "~/assets/svg/phone.svg"
import VBookOpen from "~/assets/svg/book-open.svg"
import VUser from "~/assets/svg/user.svg"

export default {
  name: "v-icon",
  props: {
    icon: {
      type: String,
      required: true
    },
    fill: {
      type: String,
      default: "#4a4a4a"
    }
  },
  computed: {
    is() {
      return `v-${this.icon}`
    }
  },
  components: {
    VClock,
    VCookieBite,
    VDrumstickBite,
    VEnvelope,
    VEye,
    VInstagram,
    VPhone,
    VBookOpen,
    VUser
  }
}
</script>
