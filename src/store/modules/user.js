import axios from "axios";

const state = {
  user: ""
};

const getters = {
  getUser: state => state.user,
  getUserName: state => state.user.userName
};

const actions = {
  async USER_REQUEST({ getters, commit, dispatch }, userId) {
    try {
      const response = await axios.post(
        "http://localhost:3000/graphql",
        {
          query: `query queryUser($userId: String!) { 
            getUser(userIdInput: {userId: $userId}) { 
              _id
              userName
              photo
              createdDate
              updatedDate
              email
            }
          }`,
          variables: {
            userId
          }
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getters.getToken}`
          }
        }
      );
      if (response.data.errors) {
        console.log("return errors");
        return response.data.errors;
      } else if (response.status === 200) {
        console.log("commit valid user");
        commit("SET_USER_SUCCESS", response.data.data.getUser);
        return response.data.data.getUser;
      }
    } catch (error) {
      dispatch("AUTH_LOGOUT");
      throw error;
    }
  }
};

const mutations = {
  SET_USER_SUCCESS(state, user) {
    state.user = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
