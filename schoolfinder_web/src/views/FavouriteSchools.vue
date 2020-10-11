<template>
    <v-main id="content">
        <Header/>
      <v-container id="container" class="mt-10 mb-10">
          <v-card
            v-for="school in Schools"
            :key="school"
          class="mx-auto"
            max-width="600"
            elevation="5"
            outlined
            shaped
          ><v-list-item three-line>
      <v-list-item-content>
          <v-row>
              <v-col cols="12" sm="6" md="5">
          <v-img
            id="avatar"
            class='preview'
            rounded
            :src="url"
            color="#009688"
      ></v-img>
      </v-col>
        <v-col>
          <h2> {{school.name}}</h2>
        </v-col>
          </v-row>
        <v-list-item-title class="headline mb-2">
          Description
        </v-list-item-title>
        <v-list-item-subtitle>{{school.description}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
        <v-row>
              <v-col >
              <h4> Rating: {{school.rating}}</h4>
              </v-col>
        <v-col
            cols="12"
            sm="6"
            md="5"
        >
            <v-btn
                @click="RemoveFromFav"
                dark
                rounded
                color=red
                small
              style="width: 200px"
            >
        Remove from Favourites
      </v-btn>
        </v-col>
     </v-row>
    </v-card-actions>
    </v-card>
      </v-container>
    </v-main>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import SignupAvatar from '../assets/SignupAvatar.png';

export default {
  components: {
    Header,
  },
  data() {
    return {
      url: SignupAvatar,
      file: '',
      Schools: {},
    };
  },
  methods: {
    previewImage() {
      this.url = URL.createObjectURL(this.file);
    },
    getUserFavSchools() {
      if (localStorage.getItem('usertoken') === null) this.$router.push('/login');
      const option = { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq', Authorization: `${'Bearer'} ${localStorage.getItem('usertoken')}` } };
      axios.get('http://127.0.0.1:8000/api/user/favorites', option)
        .then((response) => {
          let i = 0;
          while (i < response.data.length) {
            this.Schools[i] = response.data[i];
            i += 1;
          }
        });
    },
    RemoveFromFav() {
      const option = { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq', Authorization: `${'Bearer'} ${localStorage.getItem('usertoken')}` } };
      axios.post('http://127.0.0.1:8000/api/user/favorites/5/remove', option)
        .then(() => {
          // console.log(response.data);
        });
    },
  },
  created() {
    this.getUserFavSchools();
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
  max-width: 100px;
  max-height: 100px;
}
.preview {
    background-color:  #eeeeee;
    max-width: 100%;
    max-height: 100%;
}
</style>>
