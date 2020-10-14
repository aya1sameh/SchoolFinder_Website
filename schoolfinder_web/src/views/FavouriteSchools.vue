<template>
    <v-main id="content">
        <Header/>
      <v-container id="container" class="mt-10 mb-10">
          <SchoolCard
          v-for="i in Schools.length"
          :key="i"
          :school="Schools[i-1]"
          :AddToFav="false"
          @removefromfav="RemoveFromFav"
          />
      </v-container>
    </v-main>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import SchoolCard from '@/components/SchoolCard.vue';

export default {
  components: {
    Header,
    SchoolCard,
  },
  data() {
    return {
      Schools: {},
    };
  },
  methods: {
    getUserFavSchools() {
      if (localStorage.getItem('usertoken') === null) { this.$router.push('/'); return; }
      const option = { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq', Authorization: `${'Bearer'} ${localStorage.getItem('usertoken')}` } };
      axios.get('http://127.0.0.1:8000/api/user/favorites', option)
        .then((response) => {
          this.Schools = response.data;
        });
    },
    RemoveFromFav(value) {
      const option = { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq', Authorization: `${'Bearer'} ${localStorage.getItem('usertoken')}` } };
      axios.post(`${'http://127.0.0.1:8000/api/user/favorites/'}${value}${'/remove'}`, null, option)
        .then(() => {
          const index = this.Schools.findIndex((school) => school.id === value);
          this.Schools.splice(index, 1);
        });
    },
  },
  created() {
    this.getUserFavSchools();
  },
};
</script>
<style scoped>

</style>>
