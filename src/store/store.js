/* eslint-disable comma-dangle */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogged: '',
  },
  mutations: {
    signIn(state, userLogged) {
      state.userLogged = userLogged;
    },
    signOut(state) {
      state.userLogged = '';
    },
  },
  getters: {
    userLogged: state => state.userLogged,
  },
  actions: {},
});
