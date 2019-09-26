import Vue from 'vue';
import Vuex from 'vuex';

import { signIn } from './actions/signIn';
import { signUp } from './actions/signUp';
import { updateUser } from './actions/updateUser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogged: '',
  },
  mutations: {
    SIGN_IN(state, userLogged) {
      state.userLogged = userLogged;
    },
    SIGN_OUT(state) {
      state.userLogged = '';
    },
    UPDATE_USER(state, user) {
      state.userLogged.user = user;
    },
  },
  getters: {
    USER_LOGGED: state => state.userLogged,
    USER_TOKEN: state => state.userLogged.token,
  },
  actions: {
    signOut(context) {
      context.commit('SIGN_OUT');
      return 'signOut';
    },
    signIn,
    signUp,
    updateUser,
  },
});
