<template>
  <v-app>
    <Toolbar />
    <v-content class="background">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Toolbar
  },
  computed: {
    ...mapGetters(["GET_AUTH"])
  },
  methods: {
    ...mapActions(["AUTH_REQUEST"])
  }
};
</script>

<style scoped>
.background {
  background-color: #cfcfcf;
}
</style>
