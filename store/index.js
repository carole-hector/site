import Vuex from "vuex"
import { zipObj } from "ramda"
import { VIEWS_GETTER_URL, VIEWS_SETTER_URL } from "@/core/constants"

const store = () => {
  return new Vuex.Store({
    state: {
      views: null,
      offline: false
    },
    mutations: {
      setViews(state, views) {
        state.views = views
      },
      incrementViews(state, slug) {
        state.views[slug]++
      },
      setOffline(state, boolean) {
        state.offline = boolean
      }
    },
    actions: {
      async fetchViews({ commit }) {
        const { values } = await this.$axios.$get(VIEWS_GETTER_URL)
        commit("setViews", zipObj(values[0], values[1]))
      },
      async registerSlug(_, slug) {
        await this.$axios.get(`${VIEWS_SETTER_URL}?item=${slug}`)
      },
      async incrementViews(_, slug) {
        this.$axios.get(`${VIEWS_SETTER_URL}?item=${slug}&action=increment`)
      }
    }
  })
}

export default store
