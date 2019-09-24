<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>My</span>
        <span class="font-weight-light">money</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom right v-if="userLogged">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title text>{{ userLogged }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-btn text>
              <router-link :to="{ name: 'profile'}">Profile</router-link>
            </v-btn>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-btn text @click="signOut">Sign Out</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data: () => ({

  }),
  computed: {
    userLogged() {
      if (this.$store.getters.userLogged) {
        return this.$store.getters.userLogged.user.userName
      }
    }
  },
  methods: {
    signOut() {
      this.$store.commit('signOut')
      this.$router.replace('/signIn')
    }
  }
}
</script>
