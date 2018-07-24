import Vue from "vue"
import vpost from "~/components/v-post.vue"
import vpostPreview from "~/components/v-post-preview.vue"
import vheader from "~/components/v-header.vue"
import vfooter from "~/components/v-footer.vue"
import vsearchBar from "~/components/v-search-bar.vue"
import vsearchIcon from "~/components/icons/v-search-icon.vue"
import vsweetIcon from "~/components/icons/v-sweet-icon.vue"
import vuserIcon from "~/components/icons/v-user-icon.vue"
import vsavouryIcon from "~/components/icons/v-savoury-icon.vue"
import vhomeIcon from "~/components/icons/v-home-icon.vue"
import mushroomSoup from "~/pages/posts/mushroom-soup.vue"
import victoriaSponge from "~/pages/posts/victoria-sponge.vue"
import strawberryFrangipane from "~/pages/posts/strawberry-frangipane.vue"


Vue.component(vpost.name, vpost)
Vue.component(vpostPreview.name, vpostPreview)
Vue.component(vheader.name, vheader)
Vue.component(vfooter.name, vfooter)
Vue.component(vsearchBar.name, vsearchBar)
Vue.component(vsearchIcon.name, vsearchIcon)
Vue.component(vuserIcon.name, vuserIcon)
Vue.component(vhomeIcon.name, vhomeIcon)
Vue.component(vsweetIcon.name, vsweetIcon)
Vue.component(vsavouryIcon.name, vsavouryIcon)
Vue.component(mushroomSoup.name, mushroomSoup)
Vue.component(victoriaSponge.name, victoriaSponge)
Vue.component(strawberryFrangipane.name, strawberryFrangipane)
