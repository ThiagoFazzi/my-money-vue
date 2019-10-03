// import { SIGN_IN } from '../actions/signIn';
import axios from "axios";
import { signUp } from "../actions/signUp";

function transformData(string) {
  return JSON.parse(string);
}

const state = {
  auth: transformData(localStorage.getItem("auth")) || "",
  status: ""
};

const getters = {
  isAuthenticated: state => !!state.auth.token,
  status: state => state.status,
  getUserId: state => state.auth.userId,
  getToken: state => state.auth.token
};

const actions = {
  signOut({ commit }) {
    commit("AUTH_LOGOUT");
    localStorage.removeItem("auth");
    return "signOut";
  },
  async AUTH_REQUEST({ commit, dispatch, getters }, { email, password }) {
    try {
      const response = await axios.post(
        "http://localhost:3000/graphql",
        {
          query: `query signin($email: String!, $password: String!) { 
            signIn(email: $email, password: $password) { 
              userId
              token
              tokenExpiration
            }
          }`,
          variables: {
            email,
            password
          }
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (response.status === 200) {
        localStorage.setItem("auth", JSON.stringify(response.data.data.signIn));
        commit("AUTH_SUCCESS", response.data.data.signIn);
        dispatch("USER_REQUEST", getters.getUserId);
      }
      return response.data;
    } catch (error) {
      commit("AUTH_ERROR", error);
      localStorage.removeItem("auth");
      throw error;
    }
  },

  signUp
};

const mutations = {
  AUTH_SUCCESS(state, { token, tokenExpiration, userId }) {
    (state.status = "success"),
      (state.auth = {
        token,
        tokenExpiration,
        userId
      });
  },
  AUTH_LOGOUT(state) {
    state.auth = "";
  },
  AUTH_ERROR(state) {
    state.status = " error";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
