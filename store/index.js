import Vuex from 'vuex'
const LIKES_COUNTER_URL = "https://script.google.com/macros/s/AKfycbzTkMsJW5YWAqJZi6uWzQwK76tZ6B2mOGUB4bTA1J9JJeUZVoE/exec"

const createStore = () => {
  return new Vuex.Store({
    state: {
      likes: null,
      searchBar: null,
      searchValue: "",
    },
    mutations: {
      searchBar (state, b) {
        state.searchBar = b
      },
      searchValue (state, v) {
        state.searchValue = v
      },
      setLikes (state, likes) {
        state.likes = likes
      },
    },
    actions: {
      async fetchLikes({ commit }) {
        const response = await this.$axios.$get("https://sheets.googleapis.com/v4/spreadsheets/1xAdSwVYj-oSDe05kTsA_S6DNsnf-Lo0UNLHMIknlfoQ/values/Sheet1?&key=AIzaSyAzW-ZSi6h0fpFFR3RkAFai88QwQ4hNxJc")
        const keys = response.values[0]
        const values = response.values[1]
        let likes = {};
        keys.forEach((key, i) => likes[key] = values[i])
        commit("setLikes", likes)
      },
      async addItem({ commit }, permalink) {
        await this.$axios.get(`${LIKES_COUNTER_URL}?item=${permalink}`)
      },
      async incrementItem({ commit }, permalink) {
        await this.$axios.get(`${LIKES_COUNTER_URL}?item=${permalink}&action=increment`)
      }
    }
  })
}

export default createStore
