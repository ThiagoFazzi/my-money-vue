// import { SIGN_IN } from '../actions/signIn';
import axios from 'axios';
import { signUp } from '../actions/signUp';

const state = {
  userLogged: '',
  user: '',
};

const getters = {
  USER_LOGGED: state => state.userLogged,
  USER_TOKEN: state => state.userLogged.token,
};

const actions = {
  signOut(context) {
    context.commit('SIGN_OUT');
    return 'signOut';
  },
  async SIGN_IN({ commit }, { email, password }) {
    try {
      const response = await axios.post(
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
      );
      if (response.status === 200) {
        commit('SIGN_IN', response.data.data.signIn);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  signUp,
};

const mutations = {
  SIGN_IN(state, {
 token, tokenExpiration, userId, user 
}) {
    state.userLogged = {
      token,
      tokenExpiration,
      userId,
    };
    state.user = user;
  },
  SIGN_OUT(state) {
    state.userLogged = '';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
