<template>
  <v-app>
    <Toolbar v-if="getUser" />
    <v-content class="background">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Toolbar
  },
  computed: {
    ...mapGetters(["getUser"])
  }
};
</script>

<style>
.background {
  background-color: #cfcfcf;
}
</style>