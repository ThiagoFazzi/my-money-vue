/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const signIn = async (context, { email, password }) => {
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
      context.commit('signIn', response.data.data.signIn);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
