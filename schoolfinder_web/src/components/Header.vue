<template>
  <nav>
    <v-toolbar
      dark
      src="../assets/9064ed2c814cf785ca71638dd2102b099281f0fa.jpg"
    >
      <v-toolbar-title>School Finder</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-row
      align="center"
      justify="space-around"
      >
    <v-btn text>
      Home
    </v-btn>
    <v-btn text>
      About
    </v-btn>
    <v-btn text>
      Suggestions
    </v-btn>
    <v-btn text>
      Filter
    </v-btn>
    <v-btn text>
      Compare
    </v-btn>
  </v-row>
  <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="white" right>
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
  }),
  components: {
    UserDrawer,
  },
};
</script>
