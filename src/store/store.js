import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
    signOut() {
      //
    },
    signIn(context, { email, password }) {
      return axios
        .post(
          'http://localhost:3000/graphql',
          {
            query: `query signin($email: String!, $password: String!) { 
              signIn(email: $email, password: $password) { 
                userId
                token
                tokenExpiration
                user {
                  _id
                  userName
                  email
                  photo
                  createdDate
                  updatedDate
                }
              }
            }`,
            variables: {
              email,
              password,
            },
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((response) => {
          if (response.status === 200) {
            context.commit('signIn', response.data.data.signIn);
          }
          return response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
    signUp(context, { email, password, userName }) {
      return axios
        .post(
          'http://localhost:3000/graphql',
          {
            query: `mutation createuser($email: String!, $password: String!, $userName: String!) {
            createUser(userInput: {email: $email, password: $password, userName: $userName}) {
              _id
              email
              userName
              photo
              createdDate
              updatedDate
            }
          }`,
            variables: {
              email,
              password,
              userName,
            },
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          }
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
