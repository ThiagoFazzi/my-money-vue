<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 sm4 offset-sm4 style="marginTop: 200px">
        <v-card>
          <v-flex xs12 sm10 offset-sm1>
            <v-card-title primary-title>
              <h3 class="headline mb-0">SignUp - Register now!</h3>
            </v-card-title>
          </v-flex>
          <v-container>
            <v-flex xs12 sm10 offset-sm1>
              <v-text-field v-model="email" name="email" label="Email" single-line></v-text-field>
              <v-text-field v-model="userName" name="userName" label="Username" single-line></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                name="password"
                label="Password"
                single-line
              ></v-text-field>
              <v-text-field
                v-model="passwordCheck"
                type="password"
                name="passwordCheck"
                label="re-Password"
                single-line
              ></v-text-field>
            </v-flex>
          </v-container>
          <v-card-actions>
            <v-flex xs12 sm10 offset-sm1>
              <v-btn color="primary" @click="signUp">Sign Up</v-btn>
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
  name: 'SignUp',
  data() {
    return {
      email: '',
      userName: '',
      password: '',
      passwordCheck: ''
    }
  },
  computed: {
    reset() {
      this.email = ''
      this.userName = ''
      this.password = ''
    }
  },
  methods: {
    signUp() {
      if (this.password !== this.passwordCheck) {
        console.log("password not match")
      } else {
        if (this.email && this.password && this.userName) {
          const newUser = {
            email: this.email,
            userName: this.userName,
            password: this.password
          }
          this.$emit('signUp', newUser)
          this.reset
        }
      }
    },
    clearInputs() {
      this.reset
    }
  }
}
</script>