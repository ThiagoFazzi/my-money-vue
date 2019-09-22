<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>My</span>
        <span class="font-weight-light">money</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>{{ userLogged }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import Home from "./views/Home.vue";
export default {
  name: "App",
  components: {
    //Home
  },
  data: () => ({
    //
  }),
  computed: {
    userLogged() {
      if (this.$store.getters.userLogged) {
        return this.$store.getters.userLogged.user.userName;
      }
    }
  }
};
</script>
