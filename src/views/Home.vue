<template>
  <div>
    <Home v-if="isAuthenticated" />
  </div>
</template>

<script>
import Home from "../components/Home";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    Home
  },
  computed: {
    ...mapGetters(["isAuthenticated", "getUserId"])
  },
  methods: {
    ...mapActions(["USER_REQUEST"])
  },
  created() {
    if (!this.isAuthenticated) {
      this.$router.replace("signin");
    } else {
      this.USER_REQUEST(this.getUserId);
      this.$router.push("dashboard");
    }
  }
};
</script>
