<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  #content {
  color: #009688;
  background-color:#546E7A;
}
#container {
  margin-top: 1%;
  background-color: #E0E0E0;
  border-radius: 40px;
  width: 95%;
}
#SchoolFinder {
  color: #009688;
}
</style>
