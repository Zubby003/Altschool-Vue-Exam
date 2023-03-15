import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {},
  mutations: {
    decrementCount(state) {
      state.counter--;
    },
    incrementCount(state) {
      state.counter++;
    },
    resetCount(state) {
      state.counter = 0;
    },
    setNumber(state, newValue) {
      state.counter = state.counter = newValue;
    },
  },

  actions: {},
  modules: {},
});
