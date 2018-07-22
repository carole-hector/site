import Vue from "vue"
import vpost from "~/components/vpost.vue"
import vpostPreview from "~/components/vpost-preview.vue"
import vheader from "~/components/vheader.vue"
import vfooter from "~/components/vfooter.vue"
import vsearchBar from "~/components/vsearch-bar.vue"
import vsearchIcon from "~/components/icons/v-search-icon.vue"
import vsweetIcon from "~/components/icons/v-sweet-icon.vue"
import mushroomSoup from "~/pages/posts/mushroom-soup.vue"
import victoriaSponge from "~/pages/posts/victoria-sponge.vue"
import strawberryFrangipane from "~/pages/posts/strawberry-frangipane.vue"


Vue.component(vpost.name, vpost)
Vue.component(vpostPreview.name, vpostPreview)
Vue.component(vheader.name, vheader)
Vue.component(vfooter.name, vfooter)
Vue.component(vsearchBar.name, vsearchBar)
Vue.component(vsearchIcon.name, vsearchIcon)
Vue.component(vsweetIcon.name, vsweetIcon)
Vue.component(mushroomSoup.name, mushroomSoup)
Vue.component(victoriaSponge.name, victoriaSponge)
Vue.component(strawberryFrangipane.name, strawberryFrangipane)
