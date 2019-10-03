<template>
  <div>
    <Home />
  </div>
</template>

<script>
import Home from "../components/Home";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Home
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
    //getAuth() {
    //  console.log("home");
    //  console.log(this.GET_AUTH);
    //  return this.GET_AUTH;
    //}
  },
  created() {
    if (this.isAuthenticated) {
      //this.$router.push("signIn");
    }
  }
};
</script>
