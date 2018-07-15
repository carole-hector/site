import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      searchValue: "all",
    },
    mutations: {
      searchValue (state, v) {
        state.searchValue = v
        console.log(state.searchValue)
      }
    }
  })
}

export default createStore
