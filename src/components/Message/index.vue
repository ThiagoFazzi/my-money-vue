<template>
  <div class="text-center">
    <v-dialog v-model="isOpen" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>{{ title }}</v-card-title>

        <v-card-text>{{ content }}</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" text @click="isOpen = false" to="/signin">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["type", "title", "content", "isOpen"]
};
</script>

<style>
</style>