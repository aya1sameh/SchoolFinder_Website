<template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar size="100" >
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item link>
            <v-spacer></v-spacer>
            <v-icon @click='HideUserDrawer()'>mdi-menu-right</v-icon>
          </v-list-item>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="item"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
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
    </v-card>
</template>

<script>
import axios from 'axios';

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
      this.$router.push('/login');
    },
    CheckAction(value) {
      if (value === 2) {
        this.logout();
      }
      if (value === 0) {
        this.$router.push('/user_profile');
      }
    },
  },
};
</script>
