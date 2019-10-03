import axios from "axios";

//import { updateUser } from "../actions/updateUser";

const state = {
  user: ""
};

const getters = {
  getUser: state => state.user
};

const actions = {
  async USER_REQUEST({ getters, commit }, userId) {
    try {
      console.log("entrei no user request");
      const response = await axios.post(
        "http://localhost:3000/graphql",
        {
          query: `query user($userId: String!) { 
            getUser(id: $userId) { 
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
      if (response.status === 200) {
        commit("GET_USER_SUCCESS", response.data.data.getUser);
      }
      return response.data;
    } catch (error) {
      //commit("USER_ERROR", error);
      throw error;
    }
  }
};

const mutations = {
  GET_USER_SUCCESS(state, user) {
    state.user = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
