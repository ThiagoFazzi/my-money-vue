/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const updateUser = async (context, { photo, userName }) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/graphql',
      {
        query: `mutation update($userName: String!, $photo: String!) { 
          updateUser(userProfileInput: {userName: $userName, photo: $photo}) { 
            _id
            email
            userName
            photo
            createdDate
            updatedDate
          }
        }`,
        variables: {
          photo,
          userName,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${context.getters.USER_TOKEN}`,
        },
      },
    );
    if (response.status === 200) {
      console.log(response);
      context.commit('UPDATE_USER', response.data.data.updateUser);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
