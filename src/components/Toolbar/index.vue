<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>My</span>
      <span class="font-weight-light">money</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu bottom right v-if="userLogged">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-avatar size="36">
            <img
              v-if="$store.getters.userLogged.user.photo"
              :src="$store.getters.userLogged.user.photo"
              alt="avatar"
            />
            <v-icon v-if="!$store.getters.userLogged.user.photo">mdi-account-circle-outline</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title text>{{ userLogged }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-btn text :to="{ name: 'profile'}">Profile</v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-btn text @click="signOut">Sign Out</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Toolbar',
  computed: {
    userLogged() {
      if (this.$store.getters.userLogged) {
        return this.$store.getters.userLogged.user.userName
      }
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut', {})
        .then(response => {
          if (response === 'signOut') {
            this.$router.replace('/signIn');
          }
        })
        .catch(error => {
          throw error;
        })
    }
  }
}
</script>