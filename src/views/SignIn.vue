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
  computed: {
    ...mapGetters(["isAuthenticated", "userId"])
  },
  methods: {
    ...mapActions(["AUTH_REQUEST", "USER_REQUEST"]),
    signIn(user) {
      this.AUTH_REQUEST(user).then(response => {
        if (response.data.signIn) {
          this.$router.push("/home");
        } else {
          this.$router.replace("/signup");
        }
      });
    }
  },
  created() {
    if (this.isAuthenticated) {
      console.log(" passei pelo signin");
      this.USER_REQUEST(this.userId).then(response => {
        console.log(response.data);
        this.$router.push("/home");
      });
    }
  }
};
</script>
