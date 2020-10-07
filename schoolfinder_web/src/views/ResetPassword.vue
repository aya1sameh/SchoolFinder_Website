<template>
  <v-app>
    <v-content id="content">
      <v-container id="container" class="mt-10 mb-10">
        <v-row justify="center" class="mb-5">
          <v-col
            cols="12"
            class="text-h2 text-center font-weight-bold"
            id="SchoolFinder"
          >
          <p class="font-italic">Reset Password</p>
          </v-col>
        </v-row>

        <v-form ref="form">
            <v-row justify="center" class="mb-5">
          <v-col cols="3" sm="4" md="2" id="avatar">
            <v-img
              src="../assets/SchoolFinderLogo.png"
              max-height="200"
              max-width="200"
            >
            </v-img>
          </v-col>
        </v-row>

          <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              prepend-inner-icon="mdi-lock"
              color="#009688"
              :rules="[rules.required, rules.Passlength]"
              outlined
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              v-model="Confirmpassword"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              label="Confirm Password"
              prepend-inner-icon="mdi-lock"
              color="#009688"
              :rules="[rules.required, rules.Matchingchar(Confirmpassword, password)]"
              outlined
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>
        </v-row>
        </v-form>
        <v-row justify="center" no-gutters>
          <v-col cols="24" sm="18" md="15">
            <v-btn
              @click="Validate"
              rounded
              dark
              color="#009688"
              x-large
              style="width: 250px"
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      show1: false,
      show2: false,
      password: '',
      Confirmpassword: '',
      rules: {
        required: (value) => !!value || 'Required.',
        Passlength: (value) => (value.length >= 8) || 'Min 8 characters',
        Matchingchar: (Confirmpassword, password) => this.IsMatching(Confirmpassword, password) || 'Confirm password must be the same as the password',
      },
    };
  },
  methods: {
    Validate() {
      if (this.$refs.form.validate()) {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/password/reset',
          headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq' },
          data: {
            password: this.password,
            password_confirmation: this.Confirmpassword,
          },
        });
        // this.$router.push('/login');
      }
    },
    IsMatching(Confirmpassword, password) {
      if (Confirmpassword !== password) return false;
      return true;
    },
  },
};
</script>
<style scoped>
#content {
  background-color: #008080;
}
#container {
  background-color: #eeeeee;
  border-radius: 50px;
  width: 80%;
}
#SchoolFinder {
  color: #009688;
}
#avatar {
  border-radius: 50%;
  border: solid 2px #009688;
  max-width: 200px;
  max-height: 200px;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>>
