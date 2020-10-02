<template>
  <v-app>
    <v-content id="content">
      <v-container id="container" class="mt-10 mb-10">
        <v-row justify="center" class="mb-5">
          <v-col
            cols="12"
            class="text-h2 text-center font-weight-bold"
            id="signup"
          >
            Sign Up
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-5">
          <v-col
            cols="1"
            id="avatar"
          >
          <v-avatar>
            <v-icon class="mdi-48px">mdi-account</v-icon>
          </v-avatar>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Name"
              prepend-inner-icon="mdi-account"
              color="#009688"
              :rules="[rules.required]"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Email"
              prepend-inner-icon="mdi-email"
              color="#009688"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              prepend-inner-icon="mdi-lock"
              color="#009688"
              outlined
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              label="Confirm Password"
              prepend-inner-icon="mdi-lock"
              color="#009688"
              outlined
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Phone Number"
              prepend-inner-icon="mdi-phone"
              color="#009688"
              :rules="[rules.number]"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Location"
              prepend-inner-icon="mdi-map-marker"
              color="#009688"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Role"
              prepend-inner-icon="mdi-account-question"
              color="#009688"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      rules: {
        required: (value) => !!value || 'Required.',
        number: (value) => this.IsaNumber(value) || 'Not a Valid Number',
      },
    };
  },
  methods: {
    IsaNumber(value) {
      const phoneno = /^\d{11}$/;
      if (value.match(phoneno)) return true;
      return false;
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
.text-center {
  text-align: center;
}
#signup {
  color: #009688;
}
#avatar {
  border-radius:60%;
  border:solid 1px #009688;
  text-align:center;
}
</style>>
