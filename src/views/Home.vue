<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4>
        <h1>Home</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  created() {
    if (!this.$store.getters.userLogged.userId) {
      this.$router.replace('signIn');
    }
  }
}
</script>
