import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      searchValue: "all",
      showSearchBar: false
    },
    mutations: {
      searchValue (state, v) {
        state.searchValue = v
      },
      showSearchBar (state) {
        state.showSearchBar = true
      },
      hideSearchBar (state) {
        state.showSearchBar = false
      }
    }
  })
}

export default createStore
