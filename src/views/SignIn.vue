<template>
  <SignIn v-on:signIn="signIn($event)" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SignIn from "../components/SignIn";

export default {
  name: "signIn",
  components: {
    SignIn
  },
  methods: {
    ...mapActions(["AUTH_REQUEST"]),
    signIn(user) {
      this.AUTH_REQUEST(user)
        .then(response => {
          if (response.data.signIn) {
            this.$router.push("dashboard");
          } else {
            this.$router.replace("/signup");
          }
        })
        .catch(error => {
          throw error;
        });
    }
  }
};
</script>
