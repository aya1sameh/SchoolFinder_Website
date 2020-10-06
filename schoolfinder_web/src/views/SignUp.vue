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
          <p class="font-italic">Sign Up</p>
          </v-col>
        </v-row>

        <v-form ref="form">
        <v-row justify="center" class="mb-5">
          <v-col offset="1" cols="3" sm="4" md="2" id="avatar">
            <v-img
              src="../assets/SignupAvatar.png"
              max-height="100"
              max-width="100"
            >
            </v-img>
          </v-col>
          <v-col cols="1" sm="1" md="1">
            <br />
            <br />
            <br />
            <v-file-input
              hide-input
              accept="image/*"
              color="#009688"
              prepend-icon="mdi-camera-plus"
            ></v-file-input>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              v-model="Name"
              label="Name"
              prepend-inner-icon="mdi-account"
              color="#009688"
              :rules="[rules.required, rules.Namelength]"
              outlined
            ></v-text-field>
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

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              v-model="PhoneNumber"
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
              v-model="Location"
              label="Location"
              prepend-inner-icon="mdi-map-marker"
              color="#009688"
              outlined
              hint="Street-City"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5" id="signup">
            <h2>
            Register as
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
              v-model="SchoolSelected"
              v-show="role == 2"
              :items="items"
              label="Select A School"
              color="#009688"
              dense
              outlined
            >
            </v-select>
          </v-col>
        </v-row>

        </v-form>
        <br />
        <v-row justify="center" no-gutters>
          <v-col cols="24" sm="18" md="15">
            <v-btn
              @click="Validate"
              rounded
              dark
              color="#009688"
              x-large
              style="width: 250px">
              Register
            </v-btn>
          </v-col>
        </v-row>
        <br />
        <v-row justify="center" no-gutters>
          <v-col cols="24" sm="18" md="15">
            <v-btn
              to='/login'
              outlined
              rounded
              color="#009688"
              large
              style="width: 200px"
            >
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
      role: 0,
      Name: '',
      Email: '',
      password: '',
      Confirmpassword: '',
      PhoneNumber: '',
      Location: '',
      SchoolSelected: '',
      items: ['school_1', 'school_2', 'school_3', 'school_4'],
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        Passlength: (value) => (value.length >= 8) || 'Min 8 characters',
        Namelength: (value) => (value.length >= 3 && value.length <= 64) || 'Min 3 characters and Max 64 characters',
        Matchingchar: (Confirmpassword, password) => this.IsMatching(Confirmpassword, password) || 'Confirm password must be the same as the password',
        number: (value) => this.IsaNumber(value) || 'Not a Valid Number',
      },
    };
  },
  methods: {
    IsaNumber(value) {
      const phoneno = /^\d{11}$/;
      if (value.match(phoneno)) {
        return true;
      }
      return false;
    },
    IsMatching(Confirmpassword, password) {
      if (Confirmpassword !== password) return false;
      return true;
    },
    Validate() {
      if (this.$refs.form.validate()) {
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
.text-center {
  text-align: center;
}
#signup {
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
