<template>
    <v-main id="content">
        <Header v-on:childToParent="onChildClick"/>
      <v-container id="container" class="mt-10 mb-10">
          <span class="teal--text text-h5 text-center" v-if="flag">
            Looking for a school...
          </span>
          <span class="teal--text text-h5 text-center" v-if="! flag">
            Search results
          </span>
          <SchoolCard
          v-for="i in Schools.length"
          :key="i"
          :school="Schools[i-1]"
          :AddToFav="true"
          @addtofav="AddToFavorites"
          />
      </v-container>
      <Footer v-if="! flag"/>
    </v-main>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SchoolCard from '@/components/SchoolCard.vue';

export default {
  name: 'SearchResults',
  components: {
    Header,
    Footer,
    SchoolCard,
  },
  data() {
    return {
      Schools: {},
      searched: '',
      flag: true,
    };
  },
  methods: {
    onChildClick(value) {
      if (value === '') { return; }
      this.searched = value;
      axios.post('http://127.0.0.1:8000/api/schools/search', { name: this.searched }, { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq' } })
        .then((response) => {
          this.Schools = response.data;
          this.flag = false;
        });
    },
    AddToFavorites(value) {
      const option = { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq', Authorization: `${'Bearer'} ${localStorage.getItem('usertoken')}` } };
      axios.post(`${'http://127.0.0.1:8000/api/user/favorites/'}${value}${'/add'}`, null, option)
        .then(() => {
          const index = this.Schools.findIndex((school) => school.id === value);
          this.Schools.splice(index, 1);
        });
    },
  },
};
</script>
<style scoped>

</style>>
