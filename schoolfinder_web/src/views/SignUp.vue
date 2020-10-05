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
          <v-col cols="3" sm="2" md="1" id="avatar">
            <v-avatar >
              <v-icon class="mdi-48px">mdi-account</v-icon>
            </v-avatar>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
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
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              label="Email"
              prepend-inner-icon="mdi-email"
              color="#009688"
              :rules="[rules.required]"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              prepend-inner-icon="mdi-lock"
              color="#009688"
              :rules="[rules.required]"
              outlined
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              label="Confirm Password"
              prepend-inner-icon="mdi-lock"
              color="#009688"
              :rules="[rules.required]"
              outlined
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
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
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              label="Location"
              prepend-inner-icon="mdi-map-marker"
              color="#009688"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5" id="signup">
            <h2>
            Role
            </h2>
            <v-radio-group
              v-model="role"
              row
              :rules="[rules.required]"
            >
              <v-radio
                label="School finder"
                value="1"
                color="#009688"
              ></v-radio>
              <v-radio
                label="School Admin"
                value="2"
                color="#009688"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
            <v-select
              v-show="role == 2"
              :items="items"
              label="Select A School"
              color="#009688"
              dense
              outlined
            >
              <v-slider
                v-model="duration"
                min="0"
                max="1000"
                label="Duration"
                thumb-label
              ></v-slider>
            </v-select>
          </v-col>
        </v-row>
        <br />
        <v-row justify="center" no-gutters>
          <v-col cols="24" sm="18" md="15">
            <v-btn rounded dark color="#009688" x-large style="width: 250px">
              Register
            </v-btn>
          </v-col>
        </v-row>
        <br />
        <v-row justify="center" no-gutters>
          <v-col cols="24" sm="18" md="15">
            <v-btn outlined rounded color="#009688" large style="width: 200px">
              Login
            </v-btn>
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
      role: 1,
      items: ['school_1', 'school_2', 'school_3', 'school_4'],
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
  border-radius: 60%;
  border: solid 1px #009688;
  text-align: center;
}
</style>>
