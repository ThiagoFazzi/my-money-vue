<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 sm4 offset-sm4 style="marginTop: 200px">
        <v-card>
          <v-flex xs12 sm10 offset-sm1>
            <v-card-title primary-title>
              <h3 class="headline mb-0">SignIn</h3>
            </v-card-title>
          </v-flex>
          <v-container>
            <v-flex xs12 sm10 offset-sm1>
              <v-text-field
                v-model="email"
                type="text"
                name="email"
                label="Email"
                single-line
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                name="password"
                label="Password"
                single-line
                required
              ></v-text-field>
            </v-flex>
          </v-container>
          <v-card-actions>
            <v-flex xs12 sm10 offset-sm1>
              <v-btn color="primary" @click="handleSignIn">Sign In</v-btn>
              <v-btn color="secondary" @click="clearInputs">clear</v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSignIn() {
      if (this.email && this.password) {
        const signInCredentials = {
          email: this.email,
          password: this.password
        };
        this.$emit("signIn", signInCredentials);
        this.email = "";
        this.password = "";
      }
    },
    clearInputs() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>