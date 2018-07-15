import Vue from "vue"
import vpost from "~/components/vpost.vue"
import vheader from "~/components/vheader.vue"
import vfooter from "~/components/vfooter.vue"
import mushroomSoup from "~/pages/posts/mushroom-soup.vue"
import victoriaSponge from "~/pages/posts/victoria-sponge.vue"


Vue.component(vpost.name, vpost)
Vue.component(vheader.name, vheader)
Vue.component(vfooter.name, vfooter)
Vue.component(mushroomSoup.name, mushroomSoup)
Vue.component(victoriaSponge.name, victoriaSponge)
