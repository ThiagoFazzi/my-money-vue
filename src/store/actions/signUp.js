/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// eslint-disable-next-line consistent-return
export const signUp = async (context, { email, password, userName }) => {
  try {
    const response = await axios.post(
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
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
