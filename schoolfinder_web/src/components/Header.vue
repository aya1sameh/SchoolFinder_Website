<template>
  <nav>
    <v-toolbar
      dark
      color="#008080"
    >
      <v-toolbar-title class="d-none d-md-block">School Finder</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row >
      <v-col
       d-inline>
          <br />
      <v-text-field
        @click="GoToSearchResults()"
        justify="space-around"
        v-model="searched"
        solo
        label="Search"
        light
      />
      </v-col>
      </v-row>
      <v-btn icon v-on:click="emitToParent">
      <v-icon>mdi-magnify</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    <v-row dense >
      <v-col><v-btn class="d-none d-lg-block" text @click="GoToHome()">
      Home</v-btn></v-col>
      <v-col><v-btn class="d-none d-lg-block" text @click="GoToAbout()">About</v-btn></v-col>
      <v-col><v-btn class="d-none d-lg-block" text @click="GoToSuggest()">
        Suggestions</v-btn></v-col>
      <v-col><v-btn class="d-none d-lg-block" text @click="GoToFilterResults()">
      Filter</v-btn></v-col>
      <v-col><v-btn class="d-none d-lg-block" text>Compare</v-btn></v-col>
    </v-row>
  <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="white" right v-if=drawer>
      <UserDrawer @HideUserDrawer="drawer = !drawer"></UserDrawer>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import UserDrawer from './UserDrawer.vue';

export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    searched: '',
    searchResults: '',
    filteredResults: '',
  }),
  components: {
    UserDrawer,
  },
  rules: {
    required: (value) => !!value || 'Required.',
  },
  methods: {
    GoToAbout() {
      this.$router.push('about');
    },
    GoToHome() {
      this.$router.push('/home');
    },
    GoToSuggest() {
      this.$router.push('/suggest');
    },
    GoToSearchResults() {
      this.$router.push('/search_results');
    },
    GoToFilterResults() {
      this.$router.push('/filter_results');
    },
    emitToParent() {
      this.$emit('childToParent', this.searched);
      this.$router.push('/search_results');
    },
  },
};
</script>
