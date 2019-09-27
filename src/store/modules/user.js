import axios from 'axios';

import { updateUser } from '../actions/updateUser';

const state = {
  user: '',
};

const getters = {
  UPDATE_USER(state, payload) {
    state.user = payload;
  },
};

const actions = {
  updateUser,
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
