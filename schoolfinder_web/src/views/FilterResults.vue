<template>
    <v-main id="content">
        <Header v-on:HeaderToFilter="onheaderClickFilter"/>
        <span>{{ lg }}</span>
      <v-container id="container" class="mt-10 mb-10">
          <SchoolCard
          v-for="i in Schools.length"
          :key="i"
          :school="Schools[i-1]"
          />
      </v-container>
    </v-main>
</template>

<script>
import Header from '@/components/Header.vue';
import SchoolCard from '@/components/SchoolCard.vue';

export default {
  name: 'FilterResults',
  components: {
    Header,
    SchoolCard,
  },
  data() {
    return {
      Schools: {},
      lg: '',
    };
  },
  methods: {
    onheaderClickFilter(value) {
      this.lg = value;
    },
  },
};
</script>
<style scoped>

</style>>
