import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    // getters are like computed for state
    // computeds are good for computations
    // using a getter for returning state (as is) is overkill
    // authModalShow: (state) => state.authModalShow,
  },
  actions: {
  },
  modules: {
  },
});
