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
          <p class="font-italic">Recover Password</p>
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
                v-model="Email"
                label="Email"
                prepend-inner-icon="mdi-email"
                color="#009688"
                :rules="[rules.required, rules.email]"
                outlined
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
              Recover
            </v-btn>
          </v-col>
        </v-row>
        <br />
        <v-row justify="center" no-gutters>
          <v-col cols="24" sm="18" md="15">
            <v-btn
              to="/login"
              outlined
              rounded
              color="#009688"
              large
              style="width: 200px"
            >
              Back
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
      Email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
    };
  },
  methods: {
    Validate() {
      if (this.$refs.form.validate()) {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/password/forget',
          headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq' },
          data: {
            email: this.Email,
          },
        });
        this.$router.push('/login');
      }
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
