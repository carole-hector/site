import Vuex from 'vuex'
const LIKES_SETTER_URL = "https://script.google.com/macros/s/AKfycbzTkMsJW5YWAqJZi6uWzQwK76tZ6B2mOGUB4bTA1J9JJeUZVoE/exec"
const LIKES_GETTER_URL = "https://sheets.googleapis.com/v4/spreadsheets/1xAdSwVYj-oSDe05kTsA_S6DNsnf-Lo0UNLHMIknlfoQ/values/Sheet1?&key=AIzaSyDrkYV_DFaildhf1t4f542h3HKyBJq0YA4"
let que = 0
let lock = false

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
        if(!this.state.likes) {
          const response = await this.$axios.$get(LIKES_GETTER_URL)
          const keys = response.values[0]
          const values = response.values[1]
          let likes = {};
          keys.forEach((key, i) => likes[key] = Number(values[i]))
          commit("setLikes", likes)
        }
      },
      async addItem({ commit }, permalink) {
        await this.$axios.get(`${LIKES_SETTER_URL}?item=${permalink}`)
      },
      async incrementItem({ commit }, permalink) {
        que++
        let likes = this.state.likes
        likes[permalink]++
        commit("setLikes", likes)
        if(!lock) {
          lock = true
          while(que) {
            await this.$axios.get(`${LIKES_SETTER_URL}?item=${permalink}&action=increment`)
            que--
          }
          lock = false
        }
      }
    }
  })
}

export default createStore
