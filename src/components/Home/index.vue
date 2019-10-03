<template>
  <v-container fluid>
    <v-layout row class="mt-10">
      <v-flex xs12 sm10 offset-sm1>
        <v-card class="pa-4">
          <v-card-title>Home</v-card-title>
          <v-divider></v-divider>
          <v-container>Welcome, if you are on this page for sure you are logged in.</v-container>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="primary">Save</v-btn>
            <v-btn color="secondary">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>