<template>
  <SignIn v-on:signIn="signIn($event)" />
</template>

<script>
import axios from "axios";
import SignIn from "../components/SignIn";

export default {
  name: "signIn",
  components: {
    SignIn
  },
  methods: {
    signIn({ email, password }) {
      axios
        .post(
          "http://localhost:3000/graphql",
          {
            query: `query getSignIn($email: String!, $password: String!) { 
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
                }
              }
            }`,
            variables: {
              email: email,
              password: password
            }
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(resp => {
          const { data } = resp;
          if (data.data.signIn) {
            this.$store.commit("signIn", data.data.signIn);
            this.$router.replace("/");
          } else {
            this.$router.replace("signup");
          }
        })
        .catch(error => {
          throw error;
        });
    }
  }
};
</script>
