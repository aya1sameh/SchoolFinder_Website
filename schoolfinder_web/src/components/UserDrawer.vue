<template>
    <v-card flat>
      <v-card class="text-center mx-auto outlined" flat v-if="! UserOrGuest()">
        <v-icon right @click='HideUserDrawer()'>mdi-arrow-right</v-icon>
        <v-card-text >
          <span class="teal--text text-h5">
            Enjoy more features through your account!
          </span></v-card-text>
          <br/>
          <div class="text-caption">
            Join now
          </div>
          <v-btn
            rounded
            color="#009688"
            dark
            @click='GoToSignup()'
          >
            Sign Up
          </v-btn>
          <br/>
          <br/>
          <div class="text-caption">
            If you already have an account
          </div>
          <v-btn
            rounded
            color="#009688"
            dark
            @click='GoToLogin()'
          >
            Log In
          </v-btn>
        </v-card>
      <v-list v-if="UserOrGuest()">
        <v-list-item>
          <v-list-item-avatar size="100" >
            <v-img :src="url"></v-img>
          </v-list-item-avatar>
          <v-list-item link>
            <v-spacer></v-spacer>
            <v-icon @click='HideUserDrawer()'>mdi-menu-right</v-icon>
          </v-list-item>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{Name}}
            </v-list-item-title>
            <v-list-item-subtitle>{{Email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
        v-if="UserOrGuest()"
      >
        <v-list-item-group
          v-model="item"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="CheckAction(i)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <span>{{selected}}</span>
    </v-card>
</template>

<script>
import axios from 'axios';
import SignupAvatar from '../assets/SignupAvatar.png';

export default {
  name: 'UserDrawer',
  data: () => ({
    drawer: false,
    item: 0,
    items: [
      { text: 'My profile', icon: 'mdi-account' },
      { text: 'Favorites', icon: 'mdi-star' },
      { text: 'Logout', icon: 'mdi-arrow-right-bold' },
    ],
    Name: '',
    Email: '',
    url: SignupAvatar,
  }),
  props: {
    drawer: Boolean,
  },
  methods: {
    HideUserDrawer() {
      this.$emit('HideUserDrawer');
    },
    logout() {
      axios.get('http://127.0.0.1:8000/api/logout', { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq', Authorization: `${'Bearer'} ${localStorage.getItem('usertoken')}` } });
      this.$store.state.usertoken = null;
      localStorage.clear();
      this.$router.push('/');
    },
    CheckAction(i) {
      if (i === 0) this.$router.push('/user_profile');
      if (i === 1) this.$router.push('/favourite_schools');
      if (i === 2) this.logout();
    },
    GoToLogin() {
      this.$router.push('/login');
    },
    GoToSignup() {
      this.$router.push('/signup');
    },
    getUserInfo() {
      const option = { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq', Authorization: `${'Bearer'} ${localStorage.getItem('usertoken')}` } };
      axios.get('http://127.0.0.1:8000/api/user/profile', option)
        .then((response) => {
          this.Name = response.data.name;
          this.Email = response.data.email;
        });
    },
    UserOrGuest() {
      const userToken = localStorage.getItem('usertoken');
      if (!(userToken === null)) {
        this.getUserInfo();
      }
      return userToken;
    },
  },
};
</script>
