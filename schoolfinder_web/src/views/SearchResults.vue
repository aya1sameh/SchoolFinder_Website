<template>
    <v-main id="content">
        <Header v-on:childToParent="onChildClick"/>
      <v-container id="container" class="mt-10 mb-10">
          <SchoolCard
          v-for="i in Schools.length"
          :key="i"
          :school="Schools[i-1]"
          />
      </v-container>
      <span>{{searched}}</span>
    </v-main>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import SchoolCard from '@/components/SchoolCard.vue';

export default {
  name: 'SearchResults',
  components: {
    Header,
    SchoolCard,
  },
  data() {
    return {
      Schools: {},
      searched: '',
    };
  },
  methods: {
    onChildClick(value) {
      this.searched = value;
      axios.post('http://127.0.0.1:8000/api/schools/search', { name: this.searched }, { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq' } })
        .then((response) => {
          this.Schools = response.data;
        });
    },
  },
};
</script>
<style scoped>

</style>>
