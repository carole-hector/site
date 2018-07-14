import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      headerValue: "all",
    },
    mutations: {
      headerValue (state, v) {
        state.headerValue = v
        console.log(state.headerValue)
      }
    }
  })
}

export default createStore
