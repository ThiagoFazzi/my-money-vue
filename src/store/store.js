import Vue from 'vue';
import Vuex from 'vuex';

import { signIn } from './actions/signIn';
import { signUp } from './actions/signUp';

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
    updateUser(state, user) {
      state.userLogged.user = user;
    },
  },
  getters: {
    userLogged: state => state.userLogged,
  },
  actions: {
    signOut(context) {
      context.commit('signOut');
      return 'signOut';
    },
    signIn,
    signUp,
  },
});
