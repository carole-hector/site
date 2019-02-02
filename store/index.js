import Vuex from "vuex"
import { zipObj } from "ramda"
import { LIKES_GETTER_URL, LIKES_SETTER_URL } from "@/core/constants"

let que = 0
let lock = false

const store = () => {
  return new Vuex.Store({
    state: {
      likes: null,
      offline: false
    },
    mutations: {
      setLikes(state, likes) {
        state.likes = likes
      },
      incrementLikes(state, slug) {
        state.likes[slug]++
      },
      setOffline(state, boolean) {
        state.offline = boolean
      }
    },
    actions: {
      async fetchLikes({ commit }) {
        const { values } = await this.$axios.$get(LIKES_GETTER_URL)
        commit("setLikes", zipObj(values[0], values[1]))
      },
      async registerSlug(_, slug) {
        await this.$axios.get(`${LIKES_SETTER_URL}?item=${slug}`)
      },
      async incrementLikes({ commit }, slug) {
        commit("incrementLikes", slug)
        que++
        if (!lock) {
          lock = true
          while (que) {
            await this.$axios.get(
              `${LIKES_SETTER_URL}?item=${slug}&action=increment`
            )
            que--
          }
          lock = false
        }
      }
    }
  })
}

export default store
