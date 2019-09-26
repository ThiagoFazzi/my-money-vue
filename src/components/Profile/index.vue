<template>
  <v-container fluid>
    <v-layout row class="mt-10">
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="pa-4">
          <v-card-title class="justify-space-between">
            Profile
            <v-avatar size="62">
              <img v-if="user.photo" :src="user.photo" alt="avatar" />
              <v-icon v-if="!user.photo">mdi-account-circle-outline</v-icon>
            </v-avatar>
          </v-card-title>
          <v-container>
            <v-text-field label="Username" v-model="user.userName"></v-text-field>
            <v-text-field label="Avatar" v-model="user.photo"></v-text-field>
            <v-text-field label="Email" v-model="user.email" disabled></v-text-field>
            <v-text-field label="Created on" v-model="parseDate" disabled></v-text-field>
          </v-container>
          <v-card-actions>
            <v-btn color="primary" @click="updateProfile">Save</v-btn>
            <v-btn color="secondary" @click="$router.replace('/')">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  props: ["user"],
  computed: {
    parseDate() {
      return new Date(+this.user.createdDate).toLocaleDateString("de-DE");
    }
  },
  methods: {
    updateProfile() {
      this.$emit("updateProfile", this.user);
    }
  }
};
</script>
