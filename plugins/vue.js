import Vue from "vue"
import vpost from "~/components/v-post.vue"
import vdate from "~/components/v-date.vue"
import vheader from "~/components/v-header.vue"
import vfooter from "~/components/v-footer.vue"
import vloveIcon from "~/components/icons/v-love-icon.vue"
import vhomeIcon from "~/components/icons/v-home-icon.vue"
import vsweetIcon from "~/components/icons/v-sweet-icon.vue"
import vuserIcon from "~/components/icons/v-user-icon.vue"
import vsearchBar from "~/components/v-search-bar.vue"
import vsearchIcon from "~/components/icons/v-search-icon.vue"
import vsavouryIcon from "~/components/icons/v-savoury-icon.vue"
import vpostPreview from "~/components/v-post-preview.vue"
import vlikesCounter from "~/components/v-likes-counter.vue"

Vue.component(vpost.name, vpost)
Vue.component(vdate.name, vdate)
Vue.component(vheader.name, vheader)
Vue.component(vfooter.name, vfooter)
Vue.component(vloveIcon.name, vloveIcon)
Vue.component(vuserIcon.name, vuserIcon)
Vue.component(vhomeIcon.name, vhomeIcon)
Vue.component(vsearchBar.name, vsearchBar)
Vue.component(vsweetIcon.name, vsweetIcon)
Vue.component(vsearchIcon.name, vsearchIcon)
Vue.component(vpostPreview.name, vpostPreview)
Vue.component(vsavouryIcon.name, vsavouryIcon)
Vue.component(vlikesCounter.name, vlikesCounter)
