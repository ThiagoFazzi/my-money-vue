<template>
  <SignUp v-on:signUp="signUp($event)" />
</template>

<script>
import SignUp from "../components/SignUp";
import axios from "axios";

export default {
  name: "signUp",
  components: {
    SignUp
  },
  methods: {
    signUp(newUser) {
      axios
        .post(
          "http://localhost:3000/graphql",
          {
            query: `mutation getSignUp($email: String!, $password: String!, $userName: String!) { 
            createUser(userInput: {email: $email, password: $password, userName: $userName}) { 
              _id
              email
              userName
            }
          }`,
            variables: {
              email: newUser.email,
              password: newUser.password,
              userName: newUser.userName
            }
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(resp => {
          if (resp.data.data.createUser._id) {
            this.$router.replace("/");
          }
        })
        .catch(error => {
          throw error;
        });
    }
  }
};
</script>