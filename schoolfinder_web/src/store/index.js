import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usertoken: '',
    isLogued: false,
  },
  mutations: {
    login() {
      this.$store.state.usertoken = localStorage.getItem('usertoken');
      this.$store.state.isLogued = true;
    },

    logout() {
      this.$store.state.isLogued = false;
      this.$store.state.usertoken = null;
      localStorage.clear();
    },
  },
  actions: {
  },
  modules: {
  },
});
