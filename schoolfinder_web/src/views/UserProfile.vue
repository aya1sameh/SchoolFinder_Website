<template>
    <v-main id="content">
      <v-container id="container" class="mt-10 mb-10">
        <v-row justify="center" class="mb-5">
          <v-col
            cols="12"
            class="text-h2 text-center font-weight-bold"
            id="SchoolFinder"
          >
          <p class="font-italic">My Profile</p>
          </v-col>
        </v-row>
        <v-form ref="form">
        <v-row justify="center" class="mb-5">
          <v-col offset="1" cols="3" sm="4" md="2">
            <v-img
              id="avatar"
              class='preview'
              rounded
              :src="url"
              max-height="200"
              max-width="200"
            >
            </v-img>
          </v-col>
          <v-col cols="1" sm="1" md="1">
            <br />
            <br />
            <br />
            <v-file-input
              @change="previewImage"
              hide-input
              v-model="file"
              accept="image/*"
              prepend-icon="mdi-camera-plus"
              color="#009688"
            ></v-file-input>
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="6" md="5">
             <v-alert
              v-show="this.ExistingUseralert"
              border="left"
              color="#009688"
              dark
            >
            This Username is already taken try another one
            </v-alert>
          </v-col>
        </v-row>
            <v-row justify="center" no-gutters>
            <v-col cols="12" sm="6" md="5">
                <v-text-field
                    v-model="Name"
                    label="Full Name"
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
                    outlined
                    disabled
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
                    :rules="[rules.number, rules.required]"
                    outlined
                ></v-text-field>
            </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
            <v-col cols="12" sm="6" md="5">
            <v-text-field
              v-model="Location"
              label="Address"
              prepend-inner-icon="mdi-map-marker"
              color="#009688"
              outlined
              hint="Street-City"
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
              Save Changes
            </v-btn>
          </v-col>
        </v-row>
        <br />
      </v-container>
    </v-main>
</template>

<script>
import axios from 'axios';

import SignupAvatar from '../assets/SignupAvatar.png';

export default {
  data() {
    return {
      ExistingUseralert: false,
      url: SignupAvatar,
      file: '',
      Name: '',
      Email: '',
      PhoneNumber: '',
      Location: '',
      rules: {
        required: (value) => !!value || 'Required.',
        Namelength: (value) => (value.length >= 3 && value.length <= 64) || 'Min 3 characters and Max 64 characters',
        number: (value) => this.IsaNumber(value) || 'Not a Valid Number',
      },
    };
  },
  methods: {
    Validate() {
      if (this.$refs.form.validate()) {
        // const fd = new FormData(this.$refs.form);
        // fd.append('image', this.file);
        const option = { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq', 'Content-Type': 'multipart/form-data', Authorization: `${'Bearer'} ${localStorage.getItem('usertoken')}` } };
        axios.post('http://127.0.0.1:8000/api/user', {
          name: this.Name,
          phone_no: this.PhoneNumber,
          address: this.Location,
          // avatar: fd,
          // formData,
        }, option)
          .then((response) => {
            this.Name = response.data.name;
            this.Email = response.data.email;
            this.PhoneNumber = response.data.phone_no;
            this.Location = response.data.address;
            // this.file = response.data.avatar;
            this.ExistingUseralert = false;
          })
          .catch(() => {
            this.ExistingUseralert = true;
          });
      }
    },
    previewImage() {
      this.url = URL.createObjectURL(this.file);
    },
    IsaNumber(value) {
      const phoneno = /^\d{11}$/;
      if (value.match(phoneno)) {
        return true;
      }
      return false;
    },
    getUserInfo() {
      if (localStorage.getItem('usertoken') === null) this.$router.push('/login');
      const option = { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq', Authorization: `${'Bearer'} ${localStorage.getItem('usertoken')}` } };
      axios.get('http://127.0.0.1:8000/api/user/profile', option)
        .then((response) => {
          this.Name = response.data.name;
          this.Email = response.data.email;
          this.PhoneNumber = response.data.phone_no;
          this.Location = response.data.address;
          // this.file = response.data.avatar;
        });
    },
  },
  created() {
    this.getUserInfo();
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
.preview {
    background-color:  #eeeeee;
    max-width: 100%;
    max-height: 100%;
}
</style>>
