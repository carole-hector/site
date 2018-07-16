import Vue from "vue"
import vpost from "~/components/vpost.vue"
import vheader from "~/components/vheader.vue"
import vfooter from "~/components/vfooter.vue"
import vsearchBar from "~/components/vsearch-bar.vue"
import vsearchIcon from "~/components/v-search-icon.vue"
import vsweetIcon from "~/components/v-sweet-icon.vue"
import vsavouryIcon from "~/components/v-savoury-icon.vue"
import mushroomSoup from "~/pages/posts/mushroom-soup.vue"
import victoriaSponge from "~/pages/posts/victoria-sponge.vue"


Vue.component(vpost.name, vpost)
Vue.component(vheader.name, vheader)
Vue.component(vfooter.name, vfooter)
Vue.component(vsearchBar.name, vsearchBar)
Vue.component(vsearchIcon.name, vsearchIcon)
Vue.component(vsweetIcon.name, vsweetIcon)
Vue.component(vsavouryIcon.name, vsavouryIcon)
Vue.component(mushroomSoup.name, mushroomSoup)
Vue.component(victoriaSponge.name, victoriaSponge)
