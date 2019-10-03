<template>
  <v-container fluid>
    <v-layout row class="mt-10">
      <v-flex xs12 sm10 offset-sm1>
        <v-card class="pa-4">
          <v-card-title>Dashboard</v-card-title>
          <v-card-title>{{ getUserName }}</v-card-title>
          <v-divider></v-divider>
          <v-container>Welcome, if you are on this page for sure you are logged in.</v-container>
          <v-divider></v-divider>
          <v-card-actions></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["getUserName"])
  }
};
</script>

<style>
</style>