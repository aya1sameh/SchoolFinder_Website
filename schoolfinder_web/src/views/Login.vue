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
          <p class="font-italic">Login</p>
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
             <v-alert
              border="left"
              color="#009688"
              dark
            >
            Please Verify your account before login
            </v-alert>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
             <v-alert
              border="left"
              color="#009688"
              dark
            >
            Please check your mail for creating the new password
            </v-alert>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              v-model="Name"
              label="Name/Email"
              prepend-inner-icon="mdi-account"
              color="#009688"
              :rules="[rules.required, rules.NameOrEmail]"
              outlined
            ></v-text-field>
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

        </v-form>
        <v-row >
          <v-col offset='7' cols="3" sm="4" md="2">
            <v-btn to='/recover_password' rounded text>
            Forget Password?
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters>
          <v-col cols="24" sm="18" md="15">
            <v-btn @click="Validate" rounded dark color="#009688" x-large style="width: 250px">
              Login
            </v-btn>
          </v-col>
        </v-row>
        <br />
        <v-row justify="center" no-gutters>
          <v-col cols="24" sm="18" md="15">
            <v-btn
              to='/signup'
              outlined
              rounded
              color="#009688"
              large
              style="width: 200px"
            >
            Register
            </v-btn>
          </v-col>
        </v-row>
        <br />
        <v-row justify="center" no-gutters>
          <v-col cols="24" sm="18" md="15">
            <v-btn
              to='/'
              outlined
              rounded
              color="#009688"
              small
              style="width: 170px"
            >
            Continue as a Guest
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
      Name: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value);
        },
        Passlength: (value) => (value.length >= 8) || 'Min 8 characters',
        Namelength: (value) => (value.length >= 3 && value.length <= 64),
        NameOrEmail: (value) => this.NameOrEmailcheck(value) || 'Not a valid name or email',
      },
    };
  },
  methods: {
    Validate() {
      if (this.$refs.form.validate()) {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/login',
          headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq' },
          data: {
            /* if (Name.includes('@')) {
             email: this.Name,
            } */
            name: this.Name,
            password: this.password,
          },
        });
        // this.$router.push('/');
      }
    },
    NameOrEmailcheck(value) {
      if (value.includes('@')) {
        return this.rules.email(value);
      }
      return this.rules.Namelength(value);
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
