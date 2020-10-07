<template>
  <div>
    <v-toolbar
      dark
      src="../assets/9064ed2c814cf785ca71638dd2102b099281f0fa.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
      Favorites
    </v-btn>
    <v-btn text>
      Filter
    </v-btn>
  </v-row>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>
