<template>
  <v-app>
      <Header/>
      <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src=base_url+item.ad_image_url
    ></v-carousel-item>
  </v-carousel>
  </v-app>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data: () => ({
    base_url: 'http://127.0.0.1:8000/',
    items: {},
  }),
  methods: {
    getAds() {
      axios.get('http://127.0.0.1:8000/api/ads', { headers: { APP_KEY: 'c2Nob29sX2ZpbmRlcl9hcHBfa2V5ZmJkamhqeGNoa2N2anhqY2p2Ymh4amM6dmFzZGhoYXNkaGphZHNrZHNmYW1jbmhkc3VoZHVoY3Nq' } })
        .then((response) => {
          this.items = response.data;
        });
    },
  },
  created() {
    this.getAds();
  },
};
</script>
